let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");
let ampm = document.getElementById("ampm");

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if (hh >=12) {
        hr.innerHTML = `0 ${hh - 12}`;   
        ampm.innerHTML = "PM";
    }
    else{
        hr.innerHTML = hh;
    }
    if (mm >=10) {   
        mn.innerHTML = mm;
    }
    else{
        mn.innerHTML = `0 ${mm}`;
    }
    if (ss >=10) {   
        sc.innerHTML = ss;
    }
    else{
        sc.innerHTML = `0 ${ss}`;
    }

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime,1000);