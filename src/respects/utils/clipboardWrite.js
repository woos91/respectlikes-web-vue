"use strict";

let clipboardWeite = (copyData, success, error)=>{
    success = success||function(){};
    error = error||function(){};
    if (typeof(navigator.clipboard)=='undefined') {
        
        var textArea = document.createElement("textarea");
        textArea.value = copyData;
        textArea.style.position="fixed";  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            if (successful) success(copyData);
            else error(copyDat, 'Was not possible to copy te text');
        } catch (err) {
            error(copyData, err);
        }
        document.body.removeChild(textArea);
    } else {
        navigator.clipboard.writeText(copyData).then(function() {
            success(copyData);   
        }, function(err) {
            error(copyData, err);
        });
    }
}
export default clipboardWeite;
