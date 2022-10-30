// MOD manipulation practice Tream member project just using DOM

document.getElementById("btn").addEventListener("click", ()=>{
   const element = document.createElement("div");
   element.id = "me";
   element.className = "teacher-ara add";
   
   const singleTeacher = document.createElement("div");
   singleTeacher.className = "singleTeacher";
   
   const techerImage =  document.createElement("img");
   techerImage.src = "https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg";
   singleTeacher.appendChild(techerImage);
   
   const teacherName = document.createElement("h3");
   teacherName.innerText = "Jasmin";
   singleTeacher.appendChild(teacherName);
   
   const teachergicnation = document.createElement("p");
   teachergicnation.innerText = "web developer";
   singleTeacher.appendChild(teachergicnation);
   
   const readMoreButton = document.createElement("button");
   readMoreButton.innerText = "Read more";
   readMoreButton.className = "read-more-btn";
   singleTeacher.appendChild(readMoreButton);
   

   element.appendChild(singleTeacher);


   document.getElementById("root").appendChild(element);
})





document.getElementById("heading").addEventListener("copy", function(){
confirm("Ai beta amar content copy kortecis ken, toi ki chor naki?");
})


















