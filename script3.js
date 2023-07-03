const container = document.querySelector(".container");
const blood = document.querySelector(".blood");
const startBtn = document.querySelector(".startBtn");
const clasa = document.getElementById("clasa");

const terrorist = document.createElement("img");
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src", "zoroenma.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  terrorist.style.position = "absolute";
  terrorist.style.top = randTop + "px";
  terrorist.style.left = randLeft + "px";
  terrorist.style.height ="120px";
}, 1);

let score = 0;

startBtn.addEventListener("click", () => {
  container.appendChild(terrorist);

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  blood.style.top = e.pageY + "px";
  blood.style.left = e.pageX + "px";

  if (e.target === terrorist) score++;

  startBtn.innerText = "SCORE: " + score*5;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});


  //para sa countdown set time
var count = 60;
var countdownEl = document.getElementById("countdown");


// BACKGROUND MUSIC

const audio = new Audio();
audio.src = "actionv1.mp3";

 // CLICK BARIL BENGGG
let play = document.getElementById('body');
  function playna() {
    let audio = new Audio("blaster.mp3");
    audio.play()
  }
  play.addEventListener("click", playMusic);
  
 // function sa countdown

function startCountdown() {
  var crossv1=document.getElementById('crossv1');
  var countdownTimer = setInterval(function() {
    count--;
    countdownEl.innerHTML = count;

    if (count === 0) {
      clearInterval(countdownTimer);
    //  countdownEl.innerHTML = "GAME OVER";

      countdownEl.innerHTML = score*5;
      countdownEl.style.color="blue";
      countdownEl.style.fontSize="100px";
      countdownEl.style.zIndex="50";
      countdownEl.style.position="absolute";
      countdownEl.style.top="30%";
      countdownEl.style.left="47%";
      terrorist.style.display="none";
      blood.style.display="none";
      cursor.style.cursor="pointer";
      audio.style.display="none";
      audio.pause();
      clasa.style.display="block";

    }
  }, 1000);
}
function main(){
  startCountdown();
  audio.play();
  playna();
}
function restart(){
    location.href="index.html";
  }
