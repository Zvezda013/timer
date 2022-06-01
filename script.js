var start = document.getElementById('start');
    styleDays = document.querySelector('.days'),
    styleHours = document.querySelector('.hours'),
    styleMinutes = document.querySelector('.minutes'),
    styleSeconds = document.querySelector('.seconds');
mas = { 
        'lastClin': null,       
    };
start.addEventListener('click',function(){
        mas.lastClin = parseInt(Date.parse(new Date()));
        setInterval(getTimeRemaning, 1000);
        //getTimeRemaning();
});
 

function getTimeRemaning(){
    var timeNow = parseInt(Date.parse(new Date())-mas.lastClin),
        days = Math.floor((timeNow)/(1000*60*60*24)),
        hours = Math.floor((((timeNow)/1000/60/60)%24)),
        minutes = Math.floor(((timeNow/1000/60)%60));
        seconds = Math.floor(((timeNow/1000)%60));
        
    styleDays.textContent = days;
    styleHours.textContent = hours;
    styleMinutes.textContent = minutes;
    styleSeconds.textContent = seconds;
    console.log(timeNow);
}

function animation(){
    
}
