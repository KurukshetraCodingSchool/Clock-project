const hourN = document.querySelector(".hour");
const minuteN = document.querySelector(".minute");
const secondN = document.querySelector(".second");
const timeN =  document.querySelector(".time");
const dateN =  document.querySelector(".date");

const days = ["Sunday","Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour =  time.getHours();

    const hourForClock = hour>=13 ? hour%12 : hour;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

   

    hourN.style.transform =`translate(-50% , -100%) rotate(${scale(hourForClock,0,12,0,360)}deg)`;
    minuteN.style.transform = `translate(-50% ,-100%) rotate (${scale(minute,0,60,0,360)}deg)`;
    secondN.style.transform = `translate(-50% ,-100%) rotate (${scale(second,0,60,0,360)}deg)`;

    // hourN.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 12, 0, 360)}deg)`;

    timeN.innerHTML = `${hourForClock}:${minute <10 ? '0' : ''}${minute} ${ampm}`;
  date.innerHTML = `${days[day]},${months[month]}`;
}

const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num- inMin) *  (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime();

setInterval(setTime,1000)
