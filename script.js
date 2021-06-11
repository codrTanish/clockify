let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

setInterval(()=>{
    let d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    Seconds = d.getSeconds();
    
    hrotation = 30*hours + minutes/2;
    mrotation = 6*minutes;
    srotation =6*Seconds;

    

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000)

// hour1.style.transform = 'rotate(50deg)'