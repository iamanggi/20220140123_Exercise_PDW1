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

function redirectToWebsite(url) {
    window.open(url, '_blank');
}

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
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500
        }).then((result) => {
            // Redirect to the next page after the alert
            window.open("index.html", "_blank");
        });
    }
}