
let h1 = document.querySelector("h1");

function ColorChnage() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let Color = `rgb(${red},${green},${blue})`;
    h1.style.color = Color;
}
setInterval(ColorChnage,13000);

ColorChnage();
function ClockSart() {
    let clcok = new Date();
    // console.dir(clcok);
    let hours = String(clcok.getHours()).padStart(2, '0');
    let mini = String(clcok.getMinutes()).padStart(2, '0');
    let sec = String(clcok.getSeconds()).padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let day = clcok.toLocaleString('default', { weekday: 'long' }).toUpperCase();
    ;

    // console.dir(day);

    document.getElementById("hour").innerText = hours % 12 || 12;
    document.getElementById("minute").innerText = mini;
    document.getElementById("second").innerText = sec;
    document.getElementsByClassName("period").innerText = ampm;
    document.getElementsByClassName("day").innerText = day;
    let days = document.querySelector("#day");
    days.innerText = day;
    // let day=document.getElementsByClassName("day");
    // console.log(day.value);

}
setInterval(ClockSart,1000);

ClockSart();