const daysElement = document.getElementById('dias');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const countdownContainer = document.querySelector('.countdown-container');
const upcomingImg = document.getElementById('upcoming-img');
const h1Element = document.querySelector('h1');

let currentDate = new Date();
let goalDate = new Date(2023, 10, 26, 1, 1); // Año, mes (enero==0), día, hora, minutos

let days, mins, seconds, totalSeconds;

// Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    showBirthdayMessage();
    clearInterval(countdownInterval);
    return;
  }

  days = Math.floor(totalSeconds / 3600 / 24);
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;
}

function showBirthdayMessage() {
	// Ocultar el contador y mostrar el mensaje de cumpleaños
	countdownContainer.style.display = 'none';
	h1Element.textContent = '¡Felicidades!';
  
	// Crear un elemento de imagen para la tarta
	const tartaImg = document.createElement('img');
	tartaImg.src = './imagenes/tarta.png'; // Ruta relativa de la imagen de la tarta
	tartaImg.alt = 'Tarta de cumpleaños';
  
	// Agregar la imagen de la tarta al cuerpo del documento
	document.body.appendChild(tartaImg);
  }
  
  

// Función para cambiar el fondo según la estación del año
function changeBackgroundBySeason() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Suma 1 ya que los meses en JavaScript van de 0 a 11

  let seasonClass = '';

  // Determina la estación del año según el mes actual
  if (currentMonth >= 3 && currentMonth <= 5) {
    seasonClass = 'spring-background'; // Primavera: marzo (3) a mayo (5)
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    seasonClass = 'summer-background'; // Verano: junio (6) a agosto (8)
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    seasonClass = 'autumn-background'; // Otoño: septiembre (9) a noviembre (11)
  } else {
    seasonClass = 'winter-background'; // Invierno: diciembre (12), enero (1) y febrero (2)
  }

  // Aplica la clase correspondiente al cuerpo de la página
  document.body.classList.add(seasonClass);
}

// Llama a la función para cambiar el fondo al cargar la página
changeBackgroundBySeason();
