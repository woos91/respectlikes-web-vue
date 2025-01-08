const 
paramString = window.location.search.substring(1),
paramList = paramString.split('&'),
params = {}

for (let i=0, param; i<paramList.length; i++) {
    param = paramList[i].split("=");
    params[param[0]] = param[1];
}
const getParam = (paramName) => {
    return params[paramName] ? params[paramName] : '';
}

export { params, getParam }