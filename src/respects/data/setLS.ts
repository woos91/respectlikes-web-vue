let setLS = (valueName:string, value:any)=>{
    if (value === null) {
        localStorage.removeItem(valueName);
    } else if (typeof value == "string") {
        localStorage.setItem(valueName, value);
    } else {
        localStorage.setItem(valueName, JSON.stringify(value));
    }
}
export default setLS;
