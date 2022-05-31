let start = document.getElementById('start');


start.addEventListener('click',getTimeRemaning);

function getTimeRemaning(){
    let dateNow = new Date(),
        mill = Date.parse(dateNow),
        minutes = Math.floor((mill/1000/60)%60),
        hours = Math.floor((mill/(1000*60*60)));
    console.log(mill);

    return{
        'total': mill,
        'hours': hours,
        'minutes': minutes
    }
}   

setInterval(getTimeRemaning,1000);
/*function setClock(id){
    let timer = document.getElementById(id),
        minutes = timer.querySelector('.minutes'),
        hours = timer.querySelector('.hourse');
        timeInterval = setInterval(updateClock,1000);
        
    function updateClock(){
        let t = getTimeRemaning()
    }
    }
    setClock('timer')
*/