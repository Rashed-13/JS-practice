// JS build-in call, apply and bind methods

const person = {
    fullName : function(age, hobby){
        return this.fname + " " + this.lname + " age " + age + " hobby " + hobby;
    }
}

const person1 = {
    fname : "rashed",
    lname : "Khan"
}

const person2 = {
    fname : "Jasmin",
    lname : "Ara"
}


function nn(){
    console.log(person.fullName.call(person2, 32, "Codding"));
}

setTimeout(nn, 2000);



let a = [22, "Palying"];
console.log(person.fullName.apply(person2, a));



const person3= {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  let display = person3.display.bind(person3);
  setTimeout(display, 3000);