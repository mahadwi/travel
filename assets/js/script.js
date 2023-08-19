document.addEventListener("DOMContentLoaded", function() {
  const box = document.querySelector(".new-header");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
          box.classList.add("scroll");
      } else {
          box.classList.remove("scroll");
      }
  });
});

/*
document.addEventListener("DOMContentLoaded", function() {}
- fungsi javascript pada saat halaman html telah di load sepenuhnya (document ready)

window.addEventListener("scroll", function() {
- fungsi javascript yang digunakan ketika event scroll (ketika mouse di scroll maka akan menjalanjan event)
-terdapat kondisi jika halaman di scroll > 50 pixel maka tambahkan class scroll, jika tidak hilangkan class scroll

*/ 
