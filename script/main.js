// Digunakan untuk mendapatkan class prev dan next
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

// Membuat array dari gambar yang ada di halaman index.html
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

// Memindahkan gambar ke slide sebelumnya
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // Di sini panjang items = 6
})

// Fungsi untuk mengarahkan pengguna ke situs web eksternal
function redirectToWebsite(url) {
    window.open(url, '_blank');
}

// Fungsi untuk menampilkan sweet alert saat login
function sweetAlert() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Cek apakah username dan password sesuai dengan yang diinginkan
    if (username === "" && password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Silakan isi username dan password terlebih dahulu!',
            position: "center"
        });
    } else {
        // Jika username dan password sesuai, tampilkan pesan sukses
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500
        }).then((result) => {
            // Redirect ke halaman berikutnya setelah alert ditutup
            window.open("index.html", "_blank");
        });
    }
}
