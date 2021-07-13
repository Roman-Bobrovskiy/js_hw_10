class Timer {
  constructor() {
    this.day = document.querySelector('span[data-value="days"]');
    this.hour = document.querySelector('span[data-value="hours"]');
    this.min = document.querySelector('span[data-value="mins"]');
    this.sec = document.querySelector('span[data-value="secs"]');
    this.p = document.querySelector("p");
  }

  sTime() {
    let promotionTimer = new Date("Mar 20, 2022 13:00:00");
    let promotonTimerId = setInterval(() => {
      let dateNow = Date.now();
      let distance = promotionTimer - dateNow;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.day.innerHTML = days;
      this.hour.innerHTML = hours;
      this.min.innerHTML = minutes;
      this.sec.innerHTML = seconds;
      if (distance < 0) {
        clearInterval(promotonTimerId);
        this.p.innerHTML = "Time is over";
      }
    }, 1000);
  }
}

new Timer().sTime();
