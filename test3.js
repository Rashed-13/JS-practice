// JavaScript set and Map 

let nam = new Set(["rashed", "Jasmin", "Raisa"]);


for(let val in nam.values()){
    console.log(val);
}

// JavaScript  Map 

// const fruits = new Map([
//     ["apples", 500],
//     ["oranges", 200],
//     ["bananas", 300],
//     ["mango", 250]
//   ]);

//   //adding property by set methods

//   fruits.set("guava", 100);

// console.log(fruits);



// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500); // equal fruits.set({apples, 500} : 500)
fruits.set(bananas, 300);
fruits.set(oranges, 200);


console.log(fruits.get(apples));  // for this reason we have to access like this



