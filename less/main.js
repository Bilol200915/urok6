// let date = new Date()
// let history = new Date(0)

// console.log(date.getTime());
// let bekislam = new Date(2025, 0, 4)
// let difference = bekislam.getTime() - date.getTime()

// console.log((difference / 1000  ) % 60);
// console.log((difference / 1000 / 60 ) % 60);
// console.log((difference / 1000 / 60 / 60 ) % 24);
// console.log(difference / 1000 / 60 / 60 / 24);


// console.log(date.getUTCHours());

// console.log(date.getMilliseconds());
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const formatNum = (num) =>{
    if (num < 10 && num > -10) {
        return `0${num}`
    }else {
        return num
    }
}


setInterval(()=>{
    let date = new Date()
    let bekislam = new Date(2025, 0, 4)
    let difference = bekislam.getTime() - date.getTime()

    days.textContent = formatNum(Math.floor(difference  / 1000 / 60 / 60 / 24))
    hours.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60 ) % 24));
    minutes.textContent = formatNum(Math.floor((difference / 1000 / 60 ) % 60));
    seconds.textContent = formatNum(Math.floor((difference  / 1000) % 60))
}, 1000)