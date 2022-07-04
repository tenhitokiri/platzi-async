import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1"

const postData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    });
    return response;
}

const product = {
    "title": "New THK Product",
    "price": 100,
    "description": "A description for some product",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, product)
    .then(response => response.json())
    .then(data => console.log(data))