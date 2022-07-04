const promise = new Promise((resolve, reject) => {
    resolve("sup!")
});

const cows = 09;

const countCows = new Promise((resolve, reject) => {
    (cows >= 10) ? resolve(`we got (${cows}) on the farm so we're good`)
        : reject("Not enough cows")
});

countCows.then((result) => console.log(result))
    .catch((err) => console.error(err))
    .finally(() => console.log("see ya!!"))