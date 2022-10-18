// JS closer

let a = (function(){
    let number = 0;
    return ()=>{
        console.log(number++);
    }
})();


a();
a();
a();
a();

