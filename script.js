const bgHead = document.getElementById('bgHead');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn1.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#ff6347";
});

btn2.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#ee82ee";
});

btn3.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#f5deb3";
});

btn4.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#ffff00";
});

btn5.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#9acd32";
});

bgHead.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#FFF";
});