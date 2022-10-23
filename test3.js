//JS web worker API practice

document.getElementById("sw").addEventListener("click", ()=>{

    if(typeof(Worker) !== undefined){
        w = new Worker("test.js");
    }
    w.onmessage = function(vel){
        document.getElementById("demo").innerHTML = vel.data;
    }

})

document.getElementById("stpw").addEventListener("click", ()=>{

})

document.getElementById("nt").addEventListener("click", ()=>{

})




setTimeout(()=>{ document.getElementById("demo").innerHTML = "hello";}, 2000);


