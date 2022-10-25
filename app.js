//JS Ajax Practice call back formate


const displayer = document.getElementById("demo");

document.getElementById("btn").addEventListener("click", function(){

  function getData(url, cFunction){
  const xhr = new XMLHttpRequest();

  xhr.onload = function(){
  cFunction(xhr.response);
  console.log(xhr.getAllResponseHeaders());
  }

  xhr.open("GET", url);
  xhr.send();
  }
  
getData("./text.txt", cb);

})

function cb(xhr){
  console.log(xhr);
}

// Normal Formate of ajax


document.getElementById("btn").addEventListener("click", function(){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
     displayer.innerHTML = this.response;
  }
  xhr.open("GET", "./text.txt");
  xhr.setRequestHeader("favgame", "Chesh");

  xhr.send();

})


document.getElementById("btn").addEventListener("click", function(){
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
      if(xhr.readyState == 1){
        console.log("Connection Stublished");
      }else if(xhr.readyState == 2){
        console.log("Request Received");
      }else if(xhr.readyState == 3){
        console.log("Data Processing");
      }else if(xhr.readyState == 4){
        console.log("Data ready");
        displayer.innerHTML = xhr.responseText;
      }
      
     }

    xhr.open("GET", "./text.txt");
    xhr.send();
})


   