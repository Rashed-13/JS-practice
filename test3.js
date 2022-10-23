//JS Fetch API Practice
document.getElementById("btn").addEventListener("click", function(){

fetch("http://127.0.0.1:5500/text.txt")
    .then(val=>val.text())
    .then(val => document.getElementById("demo").innerHTML = val)


})

//JS Fetch API Practice by async await

async function fetchData(){
    const res = await fetch("http://127.0.0.1:5500/text.txt");
    const data = await res.text();
    document.getElementById("demo").innerHTML = data;

}

document.getElementById("btn").addEventListener("click", fetchData)


