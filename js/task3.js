let day = document.querySelector('span[data-value="days"]');
let hour = document.querySelector('span[data-value="hours"]');
let min = document.querySelector('span[data-value="mins"]');
let sec = document.querySelector('span[data-value="secs"]');
let p = document.querySelector("p");
let dateOfStart = document.querySelector("#startDate");
dateOfStart.addEventListener("input", sDate);
console.log(dateOfStart.value);

function sDate() {
  let promotionTimer = new Date(dateOfStart.value);
  console.log(promotionTimer);

  let promotonTimerId = setInterval(() => {
    let dateNow = Date.now();
    let distance = promotionTimer - dateNow;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    clearInterval(promotonTimerId);

    if (distance < 0) {
      clearInterval(promotonTimerId);
      p.innerHTML = "Time is over";
    }
  }, 1000);
}
