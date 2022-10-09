const person = {
    name : "Rashed", 
    age : 32,
    job : "Programming",
    hobby : {
        game : "cricket chesh",
        study : "reading wathing",
        love : "girls"
    },
    education: "Masters",
    profesion : "Programming"
}


for(key in person){
    if(typeof person[key] === 'object'){
        let val = true;
        for(nkey in person[key]){
            if(val){
                console.log(key);
                val = false;
            }
            console.log("\t" + nkey);
        }
    }else{
        console.log(key);
    }
}
