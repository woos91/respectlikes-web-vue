// import axios from "axios";
import apiMap from "./map";
import type { APIMap, APIType } from "./map";
import BufferWorks from "../BufferWorks";
import type { AxiosResponse } from "axios";
import { commonAPI } from "./axios/common";

interface APIData extends APIType {
    url?: string,
    params?:{},
    success?: Function,
    error?: Function,
}
class API {
    constructor(map:APIMap) {
        this._apiData = map;
        this.apiURL = import.meta.env.VITE_API_PATH||"";
    }
    private _apiData:APIMap;

    private _apiURL:string = "";
    set apiURL(url:string) { this._apiURL = url; }
    get apiURL() { return this._apiURL }

    public request (type: string, params: {}, success?: Function, error?: Function): void {
        let req:APIData|undefined = this._apiData.getRequest(type) as (APIData|undefined);
        if (req !== undefined) {
            req.url = this.apiURL+req.name;
            req.params = params;
            req.success = success;
            req.error = error;
            this.addBuffer(req);
        }
    }
    private addBuffer(req:APIData):void {
        let workReq:APIData|undefined = this.workList.set(req);
        console.log("addBuffer", workReq);
        if (workReq !== undefined) {
            this.sendRequest(workReq);
        }
    }
    private nextWork():void {
        const req = this.workList.next();
        if (req !== undefined) this.sendRequest(req);
    }
    private sendRequest(req:APIData) {
        // console.log("sendRequest", req);
        (async ()=>{
            try {
                const response:AxiosResponse = await commonAPI({
                    url:req.url,
                    method:req.method
                });
                if (req.success) {
                    req.success(response.data);
                    this.nextWork();
                }
            }
            catch(error) {
                if (req.error) {
                    req.error(error);
                    this.nextWork();
                }
            }
        })();
    }
    workList = new BufferWorks<APIData>();
}
const api:API = new API(apiMap);

export default api;


