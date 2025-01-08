let toTelString = (str)=>{
    str = str.split(" ").join("").split(".").join("").split("-").join("");
    if (str.substr(0,2) == "01") {
        if (str.length == 11) {
            return str.substr(0,3)+"-"+str.substr(3,4)+"-"+str.substr(7,4);
        } else if (str.length == 10) {
            return str.substr(0,3)+"-"+str.substr(3,3)+"-"+str.substr(6,4);
        } else {
            return str
        }
    } else if (str.substr(0,2) == "02") {
        if (str.length == 10) {
            return str.substr(0,2)+"-"+str.substr(2,4)+"-"+str.substr(6,4);
        } else if (str.length == 9) {
            return str.substr(0,2)+"-"+str.substr(2,3)+"-"+str.substr(5,4);
        } else {
            return str
        }
    } else {
        if (str.length == 11) {
            return str.substr(0,3)+"-"+str.substr(3,4)+"-"+str.substr(7,4);
        } else if (str.length == 10) {
            return str.substr(0,3)+"-"+str.substr(3,3)+"-"+str.substr(6,4);
        } else {
            return str
        }
    }
}
export default toTelString;
