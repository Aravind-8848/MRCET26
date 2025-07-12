// Create a new promise that resolves after 5 seconds
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let t = true;
        if (t) {
            resolve("success");
        } else {
            reject("unsuccessful");
        }
    }, 5000);
});

console.log("Initial promise:", p); // Logs the pending promise

// Handle the result of the promise
p.then((data) => {
    console.log("Promise resolved with data:", data);
    console.log("Promise after resolution:", p);
})
.catch((error) => {
    console.error("Promise rejected with error:", error);
});

// Define an async function (this was missing in your original code)
async function asyncFunc() {
    return "Async function completed";
}

// Define another async function that we can chain
async function asyncFunc1() {
    return "Async function 1 completed";
}

// Call asyncFunc and then chain asyncFunc1 inside
asyncFunc()
.then((data) => {
    console.log("asyncFunc resolved with data:", data);

    // Chain asyncFunc1
    asyncFunc1()
    .then((d) => {
        console.log("asyncFunc1 is also successful:", d);
    })
    .catch((error) => {
        console.log("asyncFunc1 is not successful:", error);
    });

})
.catch((error) => {
    console.log("asyncFunc failed:", error);
});
