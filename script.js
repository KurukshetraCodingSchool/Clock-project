const hourN = document.querySelector('.hour')
const minuteN = document.querySelector('.minute')
const secondN = document.querySelector('.second')
const timeN = document.querySelector('.time')
const dateN = document.querySelector('.date')
const toggle =  document.querySelector(".toggle");
const main = document.querySelector("main");
var count = 0;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggle.addEventListener("click",()=>{
  if(count===0){
    main.style.backgroundColor = "black"
    toggle.style.backgroundColor = "white"
    toggle.style.color = "black"
    count = 1;
    timeN.style.color = "white";
    dateN.style.color = "white";
  }
  else{
      main.style.backgroundColor = "white"
  toggle.style.backgroundColor = "black"
  toggle.style.color = "white";
  timeN.style.color = "black";
  dateN.style.color = "black";
  count = 0;
  }

})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourN.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteN.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondN.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  timeN.innerHTML = `${hoursForClock}:${minutes.toString().padStart(2, '0')} ${ampm}`

dateN.innerHTML = `${days[day]}, ${months[month]} ${date.toString().padStart(2, '0')}`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000);