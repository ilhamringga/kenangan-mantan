// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};


document.addEventListener("DOMContentLoaded", function() {
  // Mengambil referensi elemen-elemen pada form
  var form = document.getElementById("myForm");
  var namaInput = document.getElementById("namaInput");
  var emailInput = document.getElementById("emailInput");
  var nohpInput = document.getElementById("nohpInput");

  // Menambahkan event listener pada submit form
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit default

    // Memvalidasi input nama (tidak boleh kosong)
    if (namaInput.value.trim() === "") {
      alert("Nama harus diisi!");
      return;
    }

    // Memvalidasi input email (tidak boleh kosong dan harus memiliki format email yang valid)
    if (emailInput.value.trim() === "") {
      alert("Email harus diisi!");
      return;
    }
    if (!validateEmail(emailInput.value.trim())) {
      alert("Email tidak valid!");
      return;
    }

    // Memvalidasi input no hp (hanya boleh angka)
    if (!/^\d+$/.test(nohpInput.value.trim())) {
      alert("Nomor HP hanya boleh berisi angka!");
      return;
    }

    // Jika semua validasi berhasil, dapatkan nilai-nilai input
    var nama = namaInput.value.trim();
    var email = emailInput.value.trim();
    var nohp = nohpInput.value.trim();

    // Lakukan tindakan lain yang diinginkan, misalnya mengirim data ke server
    console.log("Data yang dikirim:");
    console.log("Nama: " + nama);
    console.log("Email: " + email);
    console.log("Nomor HP: " + nohp);
    
    // Reset form setelah submit berhasil
    form.reset();
  });
});

// Fungsi untuk validasi format email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//notif
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai-nilai input dari form
    var nama = document.getElementById("namaInput").value;
    var email = document.getElementById("emailInput").value;
    var nohp = document.getElementById("nohpInput").value;

    // Membuat objek data untuk dikirim
    var data = {
      nama: nama,
      email: email,
      nohp: nohp
    };

    // Mengirim data menggunakan permintaan HTTP POST
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "URL_SERVER_ANDA", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Response sukses, Anda dapat melakukan tindakan yang sesuai di sini
        alert("Jawaban telah terkirim!");
        console.log(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify(data));

    // Reset form
    form.reset();
  });
});
