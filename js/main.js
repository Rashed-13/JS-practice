// DOM menipulation full project
let milestoneData = JSON.parse(data);


function loadMilestone(){
  let milestone  = document.querySelector(".milestones");
  milestone.innerHTML = milestoneData.data.map(function(data){
    return`<div class="milestone border-b" id = "${data._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${data._id})" /></div>
      <div onclick="openMilestone(this, ${data._id})">
        <p>
          ${data.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">

    ${data.modules.map((dat)=>{
      return `<div class="module border-b">
                <p>${dat.name}</p>
              </div>`}).join("")}

    </div>
  </div>`
  }).join("");
}

loadMilestone();


function openMilestone(milestoneElement, id){
  let currentPannel = milestoneElement.parentNode.nextElementSibling
  
  let show = document.querySelector(".show");
  let active = document.querySelector(".active");
  
  if(show && !currentPannel.classList.contains('show')){
    show.classList.remove("show");
  }

  if(active && !milestoneElement.classList.contains("active")){
    active.classList.remove("active");
  }
  currentPannel.classList.toggle("show");
  milestoneElement.classList.toggle("active");

  showMilestoneTitleDestription(id);
}

function showMilestoneTitleDestription(id){
  let milestoneImage = document.querySelector(".milestoneImage");
  let title = document.querySelector(".title");
  let details = document.querySelector(".details");

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestoneData.data[id].image;
  title.innerHTML = milestoneData.data[id].name;
  milestoneImage.onload = function(){
  milestoneImage.style.opacity = "1";
  }

  if(milestoneData.data[id].description){
    details.innerHTML = milestoneData.data[id].description;
  }else{
    details.innerHTML = "There is no description this is a dumy text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eveniet cupiditate beatae labore repudiandae laudantium reprehenderit tempore eaque hic totam";
  }
}


function markMilestone(checkBox, currentMlstDiveId){
  let milestones = document.querySelector(".milestones");
  let doneList = document.querySelector(".doneList");
  let currentMilestoneDive = document.getElementById(currentMlstDiveId);

  if(checkBox.checked){
    milestones.removeChild(currentMilestoneDive);
    doneList.appendChild(currentMilestoneDive);
  }else{
    doneList.removeChild(currentMilestoneDive);
    milestones.appendChild(currentMilestoneDive);
    reArrangeTask(currentMlstDiveId);
  }
}

function reArrangeTask(id){
  let milestones = document.querySelector(".milestones");
  let allChindren = document.getElementById(id).parentNode.childNodes;
  let newArrangedMilestone = [];

  allChindren.forEach(val=>newArrangedMilestone.push(val));

  newArrangedMilestone.sort((a, b)=>{
    return a.id - b.id;
  })
  newArrangedMilestone.forEach(va=>milestones.appendChild(va));

}
