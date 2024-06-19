setInterval(digital_clock,1000);

let clock = document.getElementById("clock");

function digital_clock(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";


    if (hour>=12){
        hour -= 12;
        am_pm = "PM";
    }else if(hour==0){
        hour = 12;
        am_pm = "AM";
    }


    hour = hour<10?"0"+hour:hour
    min = min<10?"0"+min:min
    sec = sec<10?"0"+sec:sec


    let current_time = `${hour} : ${min} : ${sec} ${am_pm}`
    clock.textContent = current_time
}

digital_clock()