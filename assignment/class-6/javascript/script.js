let a;
let b;
const updater = (event) => {
   const panel = document.getElementById("timer__pannel");
   if (panel.value.length == 2){
      panel.value += ":";
   }
   panel.value += event.currentTarget.value;
}

document.querySelectorAll(".time__imput").forEach((element, index)=>{
   element.addEventListener("click", updater);
});

const decreasing = () => {
   const panel = document.getElementById("timer__pannel").value;
   const [min, sec] = panel.split(":");
   let seconds = Number(sec) - 1;
   let minutes = Number(min)
   if (seconds < 0){
      minutes -= 1;
      seconds = 59;
   }
   document.getElementById("timer__pannel").value = minutes + ":" + seconds;
}

const play = () => {
   const audio = new Audio("content/sounds/alarm.wav");
   audio.play();
   document.getElementById("timer__pannel").value = "00:00";
   clearInterval(a);
   clearInterval(b);
}

document.getElementById("init").addEventListener("click", () =>{
   const panel = document.getElementById("timer__pannel").value;
   const [min, sec] = panel.split(":");
   const secs = Number(min)*60 + Number(sec);
   a = setInterval(play, secs*1000);
   b = setInterval(decreasing, 1000);
});