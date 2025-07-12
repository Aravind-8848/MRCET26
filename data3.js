function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Feteching data for id:",dataId);
            if(dataId<=103)
                resolve("success");
            else{
                reject("insucessful");
            }
        },2000);
        });
    }
    getData(100)
    .then((res)=>{
        return getData(102);
    })
    .then((res)=>{
        return getData(103);
    })
    .then((res)=>{
        return getData(104);
    })
    .then((res)=>{
        console.log("all data feteched successfully");
    })
    .catch((error)=>{
        console.error("error occurred:",error);
    });