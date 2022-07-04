const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = "https://api.escuelajs.co/api/v1"

const fetchData = (urlApi, callback) => {
    let xHttp = new XMLHttpRequest();
    xHttp.open('GET', urlApi, true);
    xHttp.onreadystatechange = (event) => {
        if (xHttp.readyState === 4 && xHttp.status === 200) {
            callback(null, JSON.parse(xHttp.responseText));
        }
        if (xHttp.readyState === 4 && xHttp.status !== 200) {
            const error = new Error("Error" + xHttp.status + ": " + xHttp.statusText);
            return callback(error);
        }
    };
    xHttp.send();
}

fetchData(`${API}/products/`, (error, data) => {
    if (error) return console.error(error);
    fetchData(`${API}/products/${data[0]?.id}`, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});