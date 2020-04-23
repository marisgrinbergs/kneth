var set = document.querySelector(".set");
set.addEventListener("click", setBouton);

/*
var boutons = document.querySelectorAll(".bouton");
let i;
for (i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", clickBouton);
}
*/

let key;
let value;

var oReq = new XMLHttpRequest();
    oReq.open('GET', "https://marislol.free.beeceptor.com/my/api/path", true);
    oReq.send();

    oReq.onreadystatechange = function() {
        if (oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200)
            console.log(JSON.parse(oReq.responseText));
        else if (oReq.readyState === XMLHttpRequest.DONE && oReq.status !== 200)
            console.log("Error");
    }

function setBouton (event)
{
    function reqListener (event2) {

    let req = JSON.parse(event2.target.responseText);
    key = (Object.keys(req));
    value = (Object.values(req));

    document.querySelector(".bouton1").innerHTML = key[0];
    document.querySelector(".bouton2").innerHTML = key[1];
    document.querySelector(".bouton3").innerHTML = key[2];
    }

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://marislol.free.beeceptor.com/my/api/path", true);
    oReq.send();
}

function clickBouton (event) {

    function reqListener (event2) {
        console.log("key" + key);
        console.log("value" + value);

        var cle = event.target.innerText;
        console.log("cle" + cle);
        var object = JSON.parse(event2.target.responseText);
        if (key[0] === cle)
            document.querySelector(".bouton1").innerHTML = value[0];
        else if (key[1] === cle)
            document.querySelector(".bouton2").innerHTML = value[1];
        else if (key[2] === cle)
            document.querySelector(".bouton3").innerHTML = value[2];
    }
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://marislol.free.beeceptor.com/my/api/path", true);
    oReq.send();
}
