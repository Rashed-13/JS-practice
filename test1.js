

task1 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("Task 1 is complete");
    });
}

task2 = ()=>{
    return new Promise((resolve, reject )=>{
        resolve("Task 2 is complete");
    });
}

task3 = ()=>{
    return new Promise((resolve, reject)=>{
        reject("Task 3 is reject");
    });
}

task4 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 4 is complete");
        },2000)
    });
}


let hendleTask = async()=>{
try{
    let v1 = await task1();
    console.log(v1);
    let v4 = await task4();
    console.log(v4);
    let v2 = await task2();
    console.log(v2);
    let v3 = await task3();
    console.log(v3);
}catch(e){
    console.log(e);
}
}


hendleTask();














// task1()
//     .then((value)=>{console.log(value)})
//     .then(task4)
//     .then((value)=>{console.log(value)})
//     .then(task2)
//     .then((value)=>{console.log(value)})
//     .then(task3)
//     .then((value)=>{console.log(value)})
//     .catch((value)=>{console.log(value)})
