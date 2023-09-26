const daysElement = document.getElementById('dias');

const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');

let currentDate = new Date();
let goalDate = new Date(2023, 11, 26, 1, 1); // Año, mes (enero==0), día, hora, minutos¡
let days, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    showProduct();
    secondsElement.innerHTML = 0;
    return;
  }

  //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
  //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
  //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60

  days = Math.floor(totalSeconds / 3600 / 24);

  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;

  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

};

function showProduct() {
  upcomingImg.classList.remove('nocolor-img');
  //Paramos el intervalo que se estaba ejecutando
  clearInterval(countdownInterval);
}
