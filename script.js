function login() {
    const nama = document.getElementById("namaSiswa").value;
    const foto = document.getElementById("fotoSiswa").files[0];

    if (nama === "" || !foto) {
        alert("Nama dan foto wajib diisi!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        localStorage.setItem("namaSiswa", nama);
        localStorage.setItem("fotoSiswa", reader.result);
        window.location.href = "index.html";
    };
    reader.readAsDataURL(foto);
}

document.addEventListener("DOMContentLoaded", function () {
    const nama = localStorage.getItem("namaSiswa");
    const foto = localStorage.getItem("fotoSiswa");

    if (nama && foto) {
        document.getElementById("tampilNama").innerText = "Nama: " + nama;
        document.getElementById("tampilFoto").src = foto;
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "logout.html";
}
