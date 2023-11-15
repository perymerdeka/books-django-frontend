const authUrl = 'http://localhost:8000/api/token/';

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // cek value
    console.log(email);
    console.log(password);

    // mengirim data ke API untuk mendapatkan token
    fetch(authUrl, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",

        },
        body: JSON.stringify({email, password})
    }).then(response => response.json()).then(data => {
        console.log(data)
    }).catch(error => console.error("error", error))

}