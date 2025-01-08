let 
rootStyleElement=null,
prtStartFlag = '\n/*** CUSTOM ROOT PROPERTY START ***/\n\n',
prtEndFlag = '\n/*** CUSTOM ROOT PROPERTY END ***/\n',
prtGutter= ';\n',
prtList = [];

const
rootStyle = (valueName, value)=>{
    setRootStyleElement();
    let isPrt = checkPrt(valueName);
    if (isPrt) editPrt(valueName, value);
    else addPrt(valueName, value);
},
setRootStyleElement=()=> {
    if (rootStyleElement) return;
    rootStyleElement = document.createElement("style");
    let id = "customRootStyle", buildID=id, no=1;
    while (document.head.querySelector("#"+buildID)) {
        no += 1;
        buildID = id+no;
    }
    rootStyleElement.id= buildID;
    rootStyleElement.setAttribute("type", "text/css");
    writeStyle();
    document.head.appendChild(rootStyleElement);
},
checkPrt = (valueName)=>{
    for (let i=0; i<prtList.length; i++) {
        if (prtList[i].name == valueName) return true;
    }
    return false;
},
editPrt = (valueName, value)=>{
    for (let i=0; i<prtList.length; i++) {
        if (prtList[i].name == valueName) prtList[i].value = value;
    }
    writeStyle();
},
addPrt = (valueName, value)=>{
    prtList.push({name:valueName, value:value});
    writeStyle();
},
writeStyle = ()=> {
    let style = ':root {'+prtStartFlag;
    for (let i=0, itm; i<prtList.length; i++) {
        itm = prtList[i];
        style += '  '+itm.name+ ' : '+itm.value+prtGutter;
    }
    style += prtEndFlag+'}\n';
    rootStyleElement.textContent = style;
};

export default rootStyle;