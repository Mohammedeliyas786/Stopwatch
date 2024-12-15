let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    isRunning = false;
    clearInterval(timer);
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('clock').textContent = "00:00:00";
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    document.getElementById('clock').textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
