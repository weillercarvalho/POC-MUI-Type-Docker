const BASE_URL = "http://localhost:5000"


function creatingHeader() {
    const auth = JSON.parse(localStorage.getItem("weather") as any);
    return auth;
}

async function signup(data: object) {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        body: JSON.stringify(data)
    })
    return response.json();
}

async function signin(data: object) {
    const token = creatingHeader();
    const response = await fetch(`${BASE_URL}/`, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Context-Type': 'text/plain',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
    return response.json();
}