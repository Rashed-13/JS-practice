//JS Form API practice


function checkValidit(){
    const val = document.getElementById("input");

    if(val.validity.rangeUnderflow){
       val.setCustomValidity("tomi sala pagol");
    }

    if(!val.checkValidity()){
        val.setCustomValidity("tomi sala oagol");
     }

    document.getElementById("demo").innerHTML = val.validationMessage;









}





