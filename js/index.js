
const secondHand = document.querySelector('.second-hand');

const minuteHand = document.querySelector(".min-hand");

const hourHand = document.querySelector(".hour-hand");

function runClock (){
  const time = new Date();
  const second = time.getSeconds();
  const secondsAngle = (( second/60) * 360)+90;
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;

  const minute = time.getMinutes();
  const minuteAngle = (minute / 60 * 360) +90;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  
  const hour = time.getHours();
  const hourAngle =(( hour/ 12) * 360) + 90;
  hourHand.style.transform =  `rotate(${hourAngle}deg)`;
}

setInterval(runClock,1000);
runClock();