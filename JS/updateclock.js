/*
* updates the time dynamically based on the current time
* uses querySelectorAll to select the element for the time
* uses new date function and get function to get the hours, minutes and seconds
* the setTimeout function updates the time dynamically every one second
*/


// set variables that store the class name of the elements
const hourEl = document.querySelectorAll(".hour");
const minuteEl = document.querySelectorAll(".minutes");
const secondsEl = document.querySelectorAll(".seconds");
const ampmEl = document.querySelectorAll(".ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // convert the time to 12 hours clock and determine the AM and PM
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // add a leading zero if less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    // update the innertext of each elements with current time
    hourEl.forEach((hourEl) => {hourEl.innerText = h});
    minuteEl.forEach((minuteEl) => {minuteEl.innerText = m});
    secondsEl.forEach((secondsEl) => {secondsEl.innerText = s});
    ampmEl.forEach((ampmEl) => {ampmEl.innerText = ampm});
  

    // call the function every second
    setTimeout(updateClock, 1000);

};

// call the function
updateClock();