// reset trang web
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded"); // Thêm class "loaded" khi trang đã load xong
});





// hien thi nut menu , close khi o tren ipad,dt
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
 }

 if (close) {
     close.addEventListener('click', () => {
         nav.classList.remove('active');
     })

    }
