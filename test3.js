const person = {
  name: "rashed",
  age : 32,
  fullName : function(){
    return this.name + this.age;
  }
}
person.fullName = person.fullName.toString();
const a = JSON.stringify(person);


console.log(a);