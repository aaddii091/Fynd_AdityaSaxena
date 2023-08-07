var startTime;
        var elapsedTime = 0;
        var timerInterval;
        var lapCount = 1;

const onStartHover = () => {
    // alert("Hello");
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

const onStopHover = () => {
    clearInterval(timerInterval);
}

const updateTime = () => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
}

const updateDisplay = () => {
    var timeString = formatTime(elapsedTime);
    document.getElementById("stopwatch").textContent = timeString;
}


const onRestartHover = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapCount = 1;
    updateDisplay();
    clearLapTimes();
}

const onLapHover = () => {
    var lapTime = elapsedTime;
    var lapTimeString = formatTime(lapTime);
    var lapTimesList = document.getElementById("laps");
    var lapItem = document.createElement("li");
    lapItem.textContent = "Lap " + lapCount + ": " + lapTimeString;
    lapTimesList.appendChild(lapItem);
    lapCount++;
}




const formatTime = (time) => {
    var milliseconds = Math.floor(time % 1000 / 10);
    var seconds = Math.floor(time / 1000 % 60);
    var minutes = Math.floor(time / 1000 / 60);

    milliseconds = padZero(milliseconds);
    seconds = padZero(seconds);
    minutes = padZero(minutes);

    return minutes + ":" + seconds + ":" + milliseconds;
}

const padZero = (num) => {
    return (num < 10 ? "0" : "") + num;
}

const clearLapTimes = () => {
    var lapTimesList = document.getElementById("laps");
    lapTimesList.innerHTML = "";
}





/* <div id="content">
<div id="buttons">
<input type="button" value="Start" onmouseover="onStartHover()">
<input type="button" value="Lap" onmouseover="onLapHover()">
<input type="button" value="Stop" onmouseover="onStopHover()">
<input type="button" value="Restart" onmouseover="onRestartHover()">
<input type="button" value="Clear Laps" onmouseover="onClearHover()">
</div>
<div id="time">
<!-- 00 : 00 : 00 -->
<span id="hour">00</span> :
<span id="min">00</span> :
<span id="sec">00</span>
</div>
<div id="laps"></div>
</div>



*/
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

const onStatHover = () => {
setInterval(runTime, 1000)
}


