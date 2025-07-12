let p=new Promise((resolve,reject)=>{
    let f=true;
    if(f===true){
        resolve("done");
    }
    else{
        reject("undone");
    }
});
console.log(p);
p
    .then((data)=>{
        console.log("promise resolved with data:")
    }).catch((error)=>{
        console.error("Promise rejected with error:",error);
    });