// Toggle active

// (class yang ingin di ubah)
const navMenu = document.querySelector(".nav-menu");

// ketika toggle menu di klik
document.querySelector("#toggle").onclick = () => {
  navMenu.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan menu
const menu = document.querySelector("#toggle");


// Fungsi addEventListener() akan menangani event click pada dokumen. Ketika dokumen diklik dimanapun di halaman
// menggunakan function agar evennya bisa di ambil
document.addEventListener("click", function (e) {
//   ini kondisi jika  kita klik diluar menu dan navbar contains(e.target) maksudnya yang klik mouse kita saat itu
    if (!menu.contains(e.target) && !navMenu.contains(e.target)) {
// maka class active akan di hapus
    navMenu.classList.remove("active");
  }
});
