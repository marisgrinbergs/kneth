var set = document.querySelector(".set");
set.addEventListener("click", setBouton);

/*
var boutons = document.querySelectorAll(".bouton");
let i;
for (i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", clickBouton);
}
*/

var bouton1 = document.querySelector(".bouton1");
bouton1.addEventListener("click", clickBouton1);

var bouton2 = document.querySelector(".bouton2");
bouton2.addEventListener("click", clickBouton2);

var bouton3 = document.querySelector(".bouton3");
bouton3.addEventListener("click", clickBouton3);

var oReq = new XMLHttpRequest();
    oReq.open('GET', "https://maristest1.free.beeceptor.com/my/api/path", true);
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
    object = (Object.keys(req));

    document.querySelector(".bouton1").innerHTML = object[0];
    document.querySelector(".bouton2").innerHTML = object[1];
    document.querySelector(".bouton3").innerHTML = object[2];
    }

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://maristest1.free.beeceptor.com/my/api/path", true);
    oReq.send();
}

/*
 function clickBouton (event) {

    function reqListener (event2) {

    let req = JSON.parse(event2.target.responseText);
    object = (Object.values(req));
    document.querySelector(".bouton1").innerHTML = object[0];
    document.querySelector(".bouton2").innerHTML = object[1];
    document.querySelector(".bouton3").innerHTML = object[2];
    }
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://maristest1.free.beeceptor.com/my/api/path", true);
    oReq.send();
}
*/

function clickBouton1 (event) {

    function reqListener (event2) {

    let req = JSON.parse(event2.target.responseText);
    object = (Object.values(req));
    document.querySelector(".bouton1").innerHTML = object[0];
    }
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://maristest1.free.beeceptor.com/my/api/path", true);
    oReq.send();
}

function clickBouton2 (event) {

    function reqListener (event2) {

    let req = JSON.parse(event2.target.responseText);
    object = (Object.values(req));
    document.querySelector(".bouton2").innerHTML = object[1];
    }
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://maristest1.free.beeceptor.com/my/api/path", true);
    oReq.send();
}

function clickBouton3 (event) {

    function reqListener (event2) {

    let req = JSON.parse(event2.target.responseText);
    object = (Object.values(req));
    document.querySelector(".bouton3").innerHTML = object[2];
    }
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://maristest1.free.beeceptor.com/my/api/path", true);
    oReq.send();
}