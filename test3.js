//JS Geolocation API Practice


const displayer = document.getElementById("demo");

document.getElementById('btn').addEventListener("click", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getLocaltion, error);
    }else{
        displayer.innerHTML = "Location Services Not avilable";
    }
   
})

document.getElementById('btn').addEventListener("click", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(getLocaltion, error);
    }else{
        displayer.innerHTML = "Location Services Not avilable";
    }
   
})

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }




function getLocaltion(currPos){
    displayer.innerHTML = "laititute = " + currPos.coords.latitude + "<br/> logitute = " + currPos.coords.longitude;
}