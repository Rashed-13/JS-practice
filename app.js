//  DOM manipulation practice

//<link rel="stylesheet" href="style.css">
// document.getElementById("style").addEventListener("click", ()=>{
//     const style = document.createElement("link");
//     style.setAttribute("rel", "stylesheet");
//     style.setAttribute("href","./style.css");

//     document.head.appendChild(style);
   

// })



// document.getElementById('addHeading').addEventListener("click", ()=>{

//     const head = document.createElement("h1");
//     head.innerHTML = "DOM manipulation";
//     head.setAttribute("class", "hedaing");
//     const body = document.body;
//     const heding = document.body.getElementsByTagName("h1")[0];

//     body.insertBefore(head, heding);

// })


// //<script src="app.js"></script>
// document.getElementById("script").addEventListener("click", function(){
//     const script = document.createElement("script");
//     script.src = "./test.js";
//     document.body.appendChild(script);
    
// })

document.getElementById("style").addEventListener("click", ()=>{
     const link = document.head.getElementsByTagName("link");
     const length = link.length;
     let allLink = "";

     for(let i = 0; i< length;  i++){
        allLink+=link[i].href+ "\n";
     }

     let a = allLink.search("styleMe.css");
     console.log(allLink);
     if(a == -1){
      const style = document.createElement("link");
      // style.setAttribute("rel", "stylesheet");
      style.setAttribute("href","./styleMe.css");
      document.head.appendChild(style);

     }else{
      alert("This file is exist")
     }

})