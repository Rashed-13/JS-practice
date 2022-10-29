// MOD manipulation practice add to card  with image title price

function addToCard(item){
   let cloneProduct = item.parentElement.cloneNode(true);
   cloneProduct.children[3].remove();
   cloneProduct.children[3].classList.remove("hide");
   document.getElementById("card").appendChild(cloneProduct);

   console.log();
}


function removeFromCard(removeIteme){
   removeIteme.parentElement.remove();
}

