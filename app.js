var startBtn = document.querySelector(".stopwatch__btn");
var minsText = document.querySelector(".stopwatch__mins");
var secsText = document.querySelector(".stopwatch__secs");
var hourText = document.querySelector(".stopwatch__hours");

var interval;

var milSeconds = 00
var mins = 00;
var secs = 00;
var hour = 00;

var startStopWatch = false;

// function to start stopwatch
startBtn.addEventListener("click", () => {
    
    if(!startStopWatch) {
        startStopWatch = true;
        interval = setInterval(startTime, 10);
        startBtn.textContent = "Stop";
    }
    else {
        startStopWatch = false;
        clearInterval(interval)
        mins = 00;
        secs = 00;
        hour = 00;
        secsText.innerHTML = secs;
        minsText.innerHTML = mins;
        hourText.innerHTML = hour;
        milSeconds = 0;
        startBtn.textContent = "Start";
    }
});

function startTime () {
    milSeconds+=10;
    if (milSeconds == 1000) {
        secs++;
        milSeconds = 00;
        secsText.innerHTML = secs;
        
        if (secs == 60) {
            secs = 00;
            mins++;
            minsText.innerHTML = mins;
            
            if (mins == 60) {
                mins = 00;
                hour++;
                hourText.innerHTML = hour;
            }
        }
    }
}

