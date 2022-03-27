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
});

