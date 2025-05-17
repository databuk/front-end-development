const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll('.deadline-format h4');

let currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

const expiryDate =  new Date(currentYear, currentMonth, currentDay + 5, 12, 10, 5)
const year = expiryDate.getFullYear();
let month = expiryDate.getMonth();
month = months[month];
const date = expiryDate.getDate();
const hours  = expiryDate.getHours();
const minutes = expiryDate.getMinutes();
const seconds = expiryDate.getSeconds();
const weekday = weekdays[expiryDate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`
const expiryTime = expiryDate.getTime();

function getDeadline(){
    // const time = new Date().getTime();
    const today = new Date().getTime();
    const timeDiff =expiryTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(timeDiff / oneDay);
    let hours = Math.floor((timeDiff % oneDay) / oneHour);
    let minutes = Math.floor((timeDiff % oneHour) / oneMinute);
    let seconds = Math.floor((timeDiff % oneMinute) / oneSecond);
    const values = [days, hours, minutes, seconds];
    function  format(item){
        return (item < 10) ? `0${item}` : item;
    }

    items.forEach( (item, index) => {
        item.innerHTML = format(values[index]);
    })
   
    if (timeDiff < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, the giveaway has ended!</h4>`;
    }
}
let countdown = setInterval(getDeadline, 1000);
getDeadline();


