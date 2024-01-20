// function time(){
//     var date = new Date();
//     var hours = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     var clock = document.getElementById("clock");

    

//     hours = (hours < 10 ) ? "0" + hours : hours ;
//     min = (min < 10 ) ? "0" + min : min;
//     sec = (sec <10) ? "0" + sec : sec; 

    
//     hours = (hours > 12) ? hours -12 : hours ;

//     var t = hours + ":" + min + ":" + sec ;
    
//     clock.innerHTML = t;
//     setTimeout(time, 1000);
// }
// time();

var seconds = 0 ;
var minutes = 0 ;
var hours = 0 ;
var displayTime = document.getElementById("displayTime");
var timer = null;
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0 ;
        minutes++;
        if(minutes == 60 ){
            minutes = 0 ;
            hours ++ ;

        }
    }
    var h = (hours < 10 ) ? "0" + hours : hours;
    var m = (minutes < 10 ) ? "0" + minutes : minutes;
    var s = (seconds < 10 ) ? "0" + seconds :seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s ;
}

function watchStart(){
  if(timer != null){
    clearInterval(timer);

  }
    timer = setInterval( stopwatch , 1000);
}

function wathcStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    hours = 0 ;
    minutes = 0 ;
    seconds = 0 ;
    displayTime.innerHTML = "00:00:00";
}