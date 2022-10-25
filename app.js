//JS Ajax Practice with call back and promise formate
function sentRequest(method, url, data = null){
  const promise = new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
      resolve(xhr.response);
    }
    xhr.onerror = function(){
      reject("Hay, there is an error");
    }
  
    xhr.open(method, url);
    xhr.responseType = "json";

    if(method === "GET"){
      xhr.send();
    }else if(method === "POST"){
      xhr.send(data);
    }
  })
  return promise;
  
}


function getData(){
  sentRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(res => {
    console.log("I am from sent data");
    console.log(res);
  }).catch(err =>{
    console.log(err);
  })
}


function sentData(){
  sentRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
    title: 'Rashed',
    body: 'Khan',
    userId: 1,
  })).then( res=> {
    console.log("I am from get data");
    console.log(res.id);
  });

}

const getButton = document.getElementById("getData");
const sentButton = document.getElementById("sentData");

getButton.addEventListener("click", getData);
sentButton.addEventListener("click", sentData);