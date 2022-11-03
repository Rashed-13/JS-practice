// Call back function practice like couse selling project
let paymentsuccess = true;

function enroll(progress){
    console.log("Course enrollment is in process");

    setTimeout(() => {
        if(paymentsuccess){
            console.log("Enrollment Complete");
            progress();
        }else{
            console.log("Payment faild");
        }
    }, 2000);
}

let courseStatus = false;

function progress(getCertificate){
    console.log("Course on progress");

    setTimeout(() => {
        if(courseStatus){
            console.log("Course complete");
            getCertificate();
        }else{
            console.log("You are Not complete your course");
        }
    }, 5000);
}

function getCertificate(){
    console.log("Your Cirtificate is ready to print");
}



enroll(function(){
    progress(function(){
        getCertificate();
    })
});

// Since, there in no parameter of getCertificate() we can also call it like bellow. Both function calling is same

enroll(function(){
    progress(getCertificate);
});