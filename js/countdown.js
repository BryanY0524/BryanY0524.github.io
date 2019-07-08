var countDownDate = new Date("Sat Nov 23, 2019 00:00:00 GMT+08:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdownday").innerHTML = days;
    document.getElementById("countdownhr").innerHTML = hours;
    document.getElementById("countdownmin").innerHTML = minutes;
    document.getElementById("countdowns").innerHTML = seconds;

    // If the count down is over, write some text
    if ((distance < 0) && (-(1000*60*60*24)< distance)){
        clearInterval(x);
        document.getElementById("counter").innerHTML = "The Wedding is today!";
    }
    else if (distance < -(1000*60*60*24)){
        clearInterval(x);
        document.getElementById("counter").innerHTML = "<p>The Wedding day has passed.</p>" + "<p>Thank You for Joining us.</p>";
    }
}, 1000);