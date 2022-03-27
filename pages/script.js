document.addEventListener("DOMContentLoaded", function(){
    var fileInput = document.getElementById('upload');
    //console.log(fileInput);
    fileInput.onchange = function () {
        //console.log("test");
        if (fileInput.files.length>0) {
            document.getElementById("send").disabled = false;
        } else {
            alert("Please select an image");
        }
    };

    var send = document.getElementById("send");
    send.onclick = function(){
        this.innerHTML = "Processing...";
        this.className = "upload disabled";
    }

    var textsend = document.getElementById("textsend");
    textsend.onclick = function(){
        var x = document.getElementById("myTable").rows.length;
        for(var i = 1; i<x; i++){
            document.getElementById("table").rows[i].cells[0].innerText;
            document.getElementById("table").rows[i].cells[1].innerText;
        }
    }
});



