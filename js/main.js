
// Class add to click/tergate element and remove from all elements
let heading = document.getElementsByClassName("heading");
let length = heading.length;
for(let i = 0; i<length; i++){
  heading[i].addEventListener("click", function(e){
    let red = document.querySelector(".red");
    if(red !== null){
      red.classList.remove("red");
    }
    e.target.classList.add("red");
  })
}



