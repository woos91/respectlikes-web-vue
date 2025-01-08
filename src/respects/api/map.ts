/* eslint-disable @typescript-eslint/no-useless-constructor */
export interface APIType {
    method:"GET"|"POST"|"PUT"|"PATCH"|"DELETE",
    type:string,
    name:string,
    useAuth:boolean|null,
    sync?:boolean|false,
    params?:{},
    headers?:[]
};
export class APIMap {
    private _data:APIType[] = []
    constructor(list:APIType[]) {
        this._data = list;
    }
    getRequest(type:string):APIType|undefined {
        let con:APIType|undefined = undefined;
        for (let item of this._data) {
            if (item === undefined) break;
            if (item.type.toLowerCase() === type.toLowerCase()) {
                con = item;
                break;
            }
        }
        return con;
    }
}
const apiMap:APIMap = new APIMap([
    { type:"WORK_LIST",     name:"our/workList",        method : "GET",     useAuth:false }
]);
export default apiMap;
