setTimeout(() => {
    key = "hey";
}, 200);

var alert2 = alert;

alert = function (msg) {
    console.log("Key: " + key);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            if (xmlHttp.responseText == "success") {
                alert2("Mission accomplished!\n" + msg);
                window.parent.postMessage("success", '*');
            }8
        }
    }
    xmlHttp.open("POST", "/challenge/" + index + "/" + key, true);
    xmlHttp.send(null);
}

