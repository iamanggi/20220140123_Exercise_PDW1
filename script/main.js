let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


function validate() {
    var username = document.getElementById("username").value; // Mengambil nilai dari input username
    var password = document.getElementById("password").value; // Mengambil nilai dari input password

    // Memeriksa apakah input username atau password kosong
    if (username === "" || password === "") {
        alert("Silakan isi username dan password terlebih dahulu!"); // Menampilkan pesan jika input kosong
    } else {
        alert("Login berhasil!"); // Menampilkan pesan jika login berhasil
    }
}

function redirectToWebsite(url) {
    window.open(url, '_blank');
}

function validate() {
    var username = document.getElementById("username").value; // Mengambil nilai dari input username
    var password = document.getElementById("password").value; // Mengambil nilai dari input password

    // Memeriksa apakah input username atau password kosong
    if (username === "" || password === "") {
        alert("Silakan isi username dan password terlebih dahulu!"); // Menampilkan pesan jika input kosong
    } else {
        alert("Login berhasil!"); // Menampilkan pesan jika login berhasil
    }
}