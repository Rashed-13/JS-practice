// Callback to Promise to async await conversion practice like course  selling project
let paymentsuccess = true;
let courseStatus = true;
let tusionFee = false;

function enrollMent(){
    console.log("Course enrollment is in process");
    let promise = new Promise((resolve, reject)=>
        setTimeout(()=>{
            if(paymentsuccess){
                console.log("enrollment complete");
                resolve();
            }else{
                reject("Payment failed");
            }
        },2000);
    });

    return promise;
}

function process(){
    console.log("Course on progress");
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(courseStatus){
                console.log("Course complete");
                resolve();
            }else{
                reject("You can not complete your course"); 
            }
        }, 3000)

    });
    return promise;
}

function getCertificate(){
    let promise = new Promise((resolve, reject)=>{
        if(tusionFee){
            resolve("Congrase! Get your certificate");
        }else{
            reject("Give your accounce clearence first & Get the certificate");
        }
    });
    return promise;
}


// here we can skip any promise/function just removing a single then 

// enrollMent()
// .then(process)
// .then(getCertificate)
// .then((val)=>{
//     console.log(val);
// })
// .catch(function(value){
//     console.log(value);
// })


// async await, it is just an upgrated version of then method chaining

async function asyncAwait(){
    try{
        await enrollMent();
        await process();
        let certificate = await getCertificate();
        console.log(certificate);
    }catch(err){
        console.log(err);
    }
}

asyncAwait();




// function enroll(progress){
//     console.log("Course enrollment is in process");

//     setTimeout(() => {
//         if(paymentsuccess){
//             console.log("Enrollment Complete");
//             progress();
//         }else{
//             console.log("Payment faild");
//         }
//     }, 2000);
// }

// function progress(getCertificate){
//     console.log("Course on progress");

//     setTimeout(() => {
//         if(courseStatus){
//             console.log("Course complete");
//             getCertificate();
//         }else{
//             console.log("You are Not complete your course");
//         }
//     }, 5000);
// }

// function getCertificate(){
//     console.log("Your Cirtificate is ready to print");
// }



// enroll(function(){
//     progress(getCertificate);
// });

// Since, there in no parameter of getCertificate() we can also call it like bellow. Both function calling is same

// enroll(function(){
//     progress(function(){
//         getCertificate();
//     })
// });


