// MOD manipulation practice small add to card project

function addToCard(item){

   const cardContainer  = document.getElementById("cardContainer");
   let newItem = item.cloneNode(true);
   newItem.classList.add("cardItemStyle");
   newItem.removeAttribute("onclick");

   // Adding span into item
   let span = document.createElement("span");
   span.innerHTML = "-";
   span.classList.add("spanStyle");
   span.setAttribute("onclick", "removeItem(this)");

   newItem.appendChild(span);

   cardContainer.appendChild(newItem);
   console.log(newItem);
}




function removeItem(item){
   item.parentElement.remove();
   console.log(item.parentElement);
}


// function checkSpan(){
//    let span = document.createElement("span");
//    span.innerHTML = "-";
//    span.classList.add("spanStyle");
//    span.setAttribute("onclick", "removeItem(this)");
//    console.log(span);
// }


// checkSpan();


console.log(document.title);