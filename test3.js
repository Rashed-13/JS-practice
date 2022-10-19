// JS HTML DOM Practice


function aminata(){
    let aniElem = document.getElementById("animate");
    let pos = 0;

    let intvl = setInterval(fram, 10);

    function fram(){
        if(pos < 350){
            pos++;
            aniElem.style.top = pos + "px";
            aniElem.style.left = pos + "px";
        }else{
            console.log(Math.random());
            clearInterval(intvl);
        }
    }
}
// aminata(); 


function myfunc(){
    console.log("Page loaded");
}

function alrtMe(){
    alert("Hello");
 }

 function consoleMe(){
    console.log("Hello");
 }

 function removeAlert(){
    document.getElementById("button").removeEventListener("click", alrtMe)
 }

 document.getElementById("button").addEventListener("click", alrtMe)

 document.getElementById("button").addEventListener("click", consoleMe)

 document.getElementById("button1").addEventListener("click", removeAlert);



 window.addEventListener('resize', ()=>{
    console.log(Math.random());
 })



 let pText = document.getElementsByClassName("me");
 for(let i = 0; i < pText.length; i++){
    pText[i].innerHTML = "Hello Momo";
}


console.log(pText[0].firstChild.nodeValue);

console.log(document.getElementsByClassName("me")[0].innerText);

console.log(document);
console.log(document.documentElement);

let p = document.createElement("p");
let txt = document.createTextNode("Hello Bangladesh");
p.appendChild(txt);
p.classList.add("me");

let cont = document.getElementById("allp");
let allp = cont.getElementsByTagName("p");

let inbefor = document.getElementById("p1");

cont.insertBefore(p, allp[1]);

console.log(allp);



