const person = [
  {name : "Rashed", age : 32 },
  {name : "raisa", age : 3 },
  {name : "rekha", age : 48 },
  {name : "Rejina", age : 25 },
  {name : "rafia", age : 5 }
]

function extractArray(arr, customValue, name = 0){
  var nname = name.toString().toLowerCase();
  let newArr = arr.filter((val)=>{
    let lower = val.name.toLowerCase();
    if(lower.startsWith(customValue)){
      return val;
    }
  })
if(nname == 0){
  return newArr;
}else if(nname === "name"){
  let arrName = newArr.map((value)=>{
      return value.name;
  })
  return arrName;
  
}else if(nname === "age"){
  let arrName = newArr.map((value)=>{
    return value.age;
})
return arrName;
}else{
  console.warn("Pass the arguments currectly");
}
  
}

let bb = extractArray(person, "ra", "age");

console.log(bb);





