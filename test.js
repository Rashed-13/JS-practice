
    task1 = function(callback){
        console.log("Task 1");
        callback();
    }
    task2 = function (callback){
        setTimeout(()=>{
            console.log("Task 2");
            callback();
        },2000);
    }
    task3 =  function (callback){
        console.log("Task 3");
        callback()
    }
 
    task4 = function (callback){
        console.log("Task 4");
        callback();
    }
     
    task5 = function() {
        console.log("Task 5");
    }


    task1(function f1(){
        task2(function f2(){
            task3(function f3(){
                task4(function f4(){
                    task5();
                });
            });
        });
    });


    // task2();
    // task3();
    // task4();
    // task5();




