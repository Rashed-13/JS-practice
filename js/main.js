// DOM menipulation Tab and menu Project


let tabHeading = document.querySelectorAll(".tab-heading");
let tabLength = tabHeading.length;

for(let i = 0; i<tabLength; i++){
  tabHeading[i].addEventListener("click", function(e){
    addContent(this);
    addClass(e);
  })
}


function addContent(thiss){
  let mainhead = thiss.innerHTML;
  let mainCont = thiss.nextElementSibling.innerHTML;

  let contentHeading = document.querySelector(".content-heading");
  let contentBody = document.querySelector(".content-body");

  contentHeading.innerHTML = mainhead;
  contentBody.innerHTML = mainCont;
}

function addClass(e){
  let activeTab = document.querySelector(".activeTab");
  let li = e.target.parentNode;

  if(activeTab && !li.classList.contains("activeTab")){
    activeTab.classList.remove("activeTab");
  }
  e.target.parentNode.classList.add("activeTab");
}




// Menu Project

let menuu = document.querySelector(".nav ul li");

menuu.addEventListener("click", function(){
  let mainh = this.parentNode.parentNode;
  if(mainh.clientWidth == "350"){
    mainh.style.width = "150px";
  }else{
    mainh.style.width = "350px";
  }
  console.dir(mainh);
})


document.querySelector(".callContainer").addEventListener("click", function(){
  togleWidth();
})


function insertWidth1000(){
  document.querySelector(".callContainer").innerText = "width is now 1000px";
}

function insertWidth300(){
  document.querySelector(".callContainer").innerText = "width is now 300px";
}



function togleWidth(){
  if(document.querySelector(".callContainer").clientWidth == "300"){
     document.querySelector(".callContainer").style.width = "1000px";
     document.querySelector(".callContainer").addEventListener("transitionend", function(){
      insertWidth1000();
    })
  
  }else{
    document.querySelector(".callContainer").style.width = "300px";
    document.querySelector(".callContainer").addEventListener("transitionend", function(){
    insertWidth300();
  })

}
}

document.querySelector(".callContainer").addEventListener("transitionrun", function(event){
console.log(this.offsetWidth);
})

