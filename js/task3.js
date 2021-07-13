class Timer {
  constructor() {
    console.log("const");
    this.day = document.querySelector('span[data-value="days"]');
    this.hour = document.querySelector('span[data-value="hours"]');
    this.min = document.querySelector('span[data-value="mins"]');
    this.sec = document.querySelector('span[data-value="secs"]');
    this.p = document.querySelector("p");
    this.input = document.querySelector("#startDate");
    this.init();
    this.promotonTimerId = null;
  }
  init() {
    console.log("init()");
    this.input.addEventListener("input", this.sTime.bind(this));
  }

  sTime() {
    console.log("sTime()", this.input);
    if (this.promotonTimerId !== null) {
      clearInterval(this.promotonTimerId);
      this.promotonTimerId = null;
    }
    let promotionTimer = new Date(this.input.value);
    console.log(promotionTimer);
    this.promotonTimerId = setInterval(() => {
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
        clearInterval(this.promotonTimerId);
        this.promotonTimerId = null;
        this.p.innerHTML = "Time is over";
      }
    }, 1000);
  }
}

new Timer();
