// MOD manipulation practice with creat delete all/one by one 

document.getElementById("addHeading").addEventListener("click", function(){
   const element = document.createElement("h2");
   const contentt =  document.createTextNode("Hello");
   element.appendChild(contentt);

   const bod = document. body;
   const id1 = document.getElementById("id1");

   bod.insertBefore(element, id1)
})


document.getElementById("remove").addEventListener("click", ()=>{

const element =  document.body.getElementsByTagName("h2");
const length = element.length -1;


 // remove one by one

if(element.length != 0){
   element[length].remove(); 
}else{
   alert("There is no element remined");
}


// bellow code will all remove togather

// for(let i = length; i >= 0; i--){
//    element[i].remove();
// }

})