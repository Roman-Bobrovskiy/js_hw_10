let date = document.querySelector('p')
let ldate = document.querySelector('#localdate')
ldate.addEventListener("input",sDate)

function sDate() {

let p = document.querySelector("p");
console.log(p);


 let promotionTimer = new Date(ldate.value);
console.log(promotionTimer);   



let promotonTimerId = setInterval(() => {
    let dateNow = Date.now(); // timestamp
    // console.log(dateNow);

    let distance = promotionTimer - dateNow;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    p.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

    if (distance < 0) {
        clearInterval(promotonTimerId);
        p.innerHTML = "Акция закончилась";
    }
}, 1000);}