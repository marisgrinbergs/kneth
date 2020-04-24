var set = document.querySelector(".set");
set.addEventListener("click", setBouton);

let object;
/*
var oReq = new XMLHttpRequest();
    oReq.open('GET', "https://marislol.free.beeceptor.com/my/api/path", true);
    oReq.send();

    oReq.onreadystatechange = function() {
        if (oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200)
            console.log(JSON.parse(oReq.responseText));
        else if (oReq.readyState === XMLHttpRequest.DONE && oReq.status !== 200)
            console.log("Error");
    }
*/

function setBouton (event)
{
    function reqListener (event2) {
    object = JSON.parse(event2.target.responseText);
    const key = (Object.keys(object));

    document.querySelector(".bouton1").innerHTML = key[0];
    document.querySelector(".bouton2").innerHTML = key[1];
    document.querySelector(".bouton3").innerHTML = key[2];
    }

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('GET', "https://maristlol.free.beeceptor.com/my/api/path", true);
    oReq.send();
}

function clickBouton (event) {

        var cle = event.target.innerText;
        const target = event.target.className;


        console.log(event.target.className);
        console.log("cle" , cle);
        console.log(object[cle]);
    
        document.querySelector("." + target).innerHTML = object[cle];
}