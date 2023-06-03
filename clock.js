let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function display(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hourRotatation = 30*hh + mm/2;
    let minRotatation = 6*mm;
    let secRotatation = 6*ss;

    hr.style.transform = `rotate(${hourRotatation}deg)`;
    min.style.transform = `rotate(${minRotatation}deg)`;
    sec.style.transform = `rotate(${secRotatation}deg)`;
}

setInterval(display, 1000);