// MOD manipulation practice add to card  with image title price updated

function addToCard(item){
   let cloneProduct = item.parentElement.cloneNode(true);

   cloneProduct.getElementsByClassName("addTocadr")[0].remove();
   cloneProduct.getElementsByClassName("removeFromCard")[0].classList.remove("hide");
   document.getElementById("card").appendChild(cloneProduct);
}


function removeFromCard(removeIteme){
   removeIteme.parentElement.remove();
}


