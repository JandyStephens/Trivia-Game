var number=10; //300=5 minutes
var countdown;

window.onload=run();

function run(){
    countdown=setInterval(decrease, 1000);
}

function decrease(){
    number--;
        var converted = timeConverter(number);
    // console.log(converted);
    $("#timer").html("<h3>" + converted + "</h3>");
}

  

// setTimeout(timeIsUp,10000); //10 seconds 
// console.log(number);

// window.onload = function() {
//     number--;
//     console.log(number);

// }

function timeIsUp(){
    console.log("TODO: reveal page");
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
