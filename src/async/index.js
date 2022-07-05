const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve("Async !!"), 2000)
            : reject(new Error("Error !!"));
    })
}

const anotherFunction = async () => {
    const someThing = await fnAsync();
    console.log(someThing);
    console.log("hello");
};
console.log("Before");
anotherFunction();
console.log("After");