let clock=() =>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM";

    if(hour==0) {
        hour = hour - 12;
    } else if(hour >= 12) {
        hour = hour - 12;
        period = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let time = `${hour}:${min}:${sec}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
}

clock();