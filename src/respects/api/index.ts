// import axios from "axios";
import apiMap from "./map";
import type { APIMap, APIType } from "./map";
import BufferWorks from "../BufferWorks";
import { AxiosResponse } from "axios";
import { commonAPI } from "./axios/common";

interface APIData extends APIType {
    url?: string,
    params?:{},
    success?: Function,
    error?: Function,
}
class API {
    constructor(map:APIMap) {
        this.isWorking = false;
        this._apiData = map;
        this.apiURL = process.env.REACT_APP_API_URL ||"";
    }
    private _apiData:APIMap;

    private _apiURL:string = "";
    set apiURL(url:string) { this._apiURL = url; }
    get apiURL() { return this._apiURL }

    public request (type: string, params: {}, success?: Function, error?: Function): void {
        console.log("request");
        let req:APIData|undefined = this._apiData.getRequest(type) as APIData;
        if (req !== undefined) {
            req.url = this.apiURL+req.name;
            req.params = params;
            req.success = success;
            req.error = error;

            this.addBuffer(req);
        }
    }
    private addBuffer(req:APIData):void {
        console.log("add buffer");
        let workReq:APIData|undefined = this.workList.push(req);
        console.log("workReq", workReq);
        if (workReq !== undefined) {
            this.sendRequest(workReq);
        }
    }
    private nextWork():void {
        const req = this.workList.next();
        if (req !== undefined) this.sendRequest(req);
        else this.isWorking = false;
    }
    private sendRequest(req:APIData) {
        console.log("sendRequst");
        this.isWorking = true;
        (async ()=>{
            try {
                const response:AxiosResponse = await commonAPI({
                    url:req.url,
                    method:req.method
                });
                if (req.success) req.success(response.data);
            }
            catch(error) {
                if (req.error) req.error(error);
            }
        })();
    }
    workList = new BufferWorks<APIData>();
    isWorking: boolean = false;
}
const api:API = new API(apiMap);

export default api;


