var countDownDate = new Date("Sat Nov 23, 2019 00:00:00 GMT+08:00").getTime();

function mbStrWidth(input) {
    let len = 0;
    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);
        if ((code >= 0x0020 && code <= 0x1FFF) || (code >= 0xFF61 && code <= 0xFF9F)) {
            len += 1;
        } else if ((code >= 0x2000 && code <= 0xFF60) || (code >= 0xFFA0)) {
            len += 2;
        } else {
            len += 0;
        }
    }
    return len;
}

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
    sday = days.toString();
    shours = hours.toString();
    smin = minutes.toString();
    ss = seconds.toString();


    document.getElementById("countdownday").innerHTML = sday;
    document.getElementById("countdownhr").innerHTML = shours;
    document.getElementById("countdownmin").innerHTML = smin;
    document.getElementById("countdowns").innerHTML = ss;

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