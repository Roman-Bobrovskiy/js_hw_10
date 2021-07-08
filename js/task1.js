// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя инлайн-стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = ["red", "green", "violet", "gray", "blue", "yellow"];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let btnStart = document.querySelector('[data-action="start"]');
let btnStop = document.querySelector('[data-action="stop"]');
// console.log(btnStart);
// console.log(btnStop);
btnStart.addEventListener("click", changeColor);
btnStop.addEventListener("click", stopChangeColor);

let startChangeColors;

function changeColor() {
  startChangeColors = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)]; // как-то у меня "простые" задачи занимают больше всего времени. На эту строчку потратил 95% времени.
    btnStart.disabled = true;
    // console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
  }, 1000);
  //   console.log(colors);
}

function stopChangeColor() {
  clearInterval(startChangeColors);
  btnStart.disabled = false;
}
