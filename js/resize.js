window.addEventListener("load", screenresize);

function screenresize(){
    var x = window.innerWidth;
    if (x < 992) {
        document.getElementById('topr').innerHTML = "<iframe width=\"100%\" height=\"500\"\n" +
            "                    src=\"https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4-8%20Garden%20Rd%2C%20Central%2C%20Hong%20Kong+(St%20John's%20Cathedral)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\"\n" +
            "                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a\n" +
            "                    href=\"https://www.maps.ie/map-my-route/\">Create a route on google maps</a></iframe>"
        document.getElementById('botl').innerHTML = "        <div class=\"col-lg-6 d-flex right2 text-center\" id=\"topr\">\n" +
            "                <div class=\"event_info\">\n" +
            "                    <img src=\"images/celebrate.png\" class=\"inline_icon\" alt=\"celebrate\">\n" +
            "                    <img src=\"images/dinner.png\" class=\"inline_icon\" alt=\"dinner\">\n" +
            "                    <p>Wedding Banquet<br>\n" +
            "                        Time: 7:00 PM<br>\n" +
            "                        Kowloon Shangri-La<br>\n" +
            "                        64 Mody Road, Tsim Sha Tsui East, Kowloon Hong Kong </p>\n" +
            "               </div>\n" +
            "        </div>"
    }
}


window.addEventListener("resize", function () {
    var x = window.innerWidth;
    if ((x < 992) && (x > 600)) {
        document.getElementById('topr').innerHTML = "<iframe width=\"100%\" height=\"500\"\n" +
            "                    src=\"https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4-8%20Garden%20Rd%2C%20Central%2C%20Hong%20Kong+(St%20John's%20Cathedral)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\"\n" +
            "                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a\n" +
            "                    href=\"https://www.maps.ie/map-my-route/\">Create a route on google maps</a></iframe>";
        document.getElementById('botl').innerHTML = "        <div class=\"col-lg-6 d-flex right2 text-center\" id=\"topr\">\n" +
            "            <div id=\"b_bg\">\n" +
            "                <div class=\"event_info\">\n" +
            "                    <img src=\"images/celebrate.png\" class=\"inline_icon\" alt=\"celebrate\">\n" +
            "                    <img src=\"images/dinner.png\" class=\"inline_icon\" alt=\"dinner\">\n" +
            "                    <p>Wedding Banquet<br>\n" +
            "                        Time: 7:00 PM<br>\n" +
            "                        Kowloon Shangri-La<br>\n" +
            "                        64 Mody Road, Tsim Sha Tsui East, Kowloon Hong Kong </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
    } else if ((x > 991) && (x < 1200)) {
        document.getElementById('topr').innerHTML = "        <div class=\"col-lg-6 d-flex right2 text-center\" id=\"topr\">\n" +
            "                <div class=\"event_info\">\n" +
            "                    <img src=\"images/celebrate.png\" class=\"inline_icon\" alt=\"celebrate\">\n" +
            "                    <img src=\"images/dinner.png\" class=\"inline_icon\" alt=\"dinner\">\n" +
            "                    <p>Wedding Banquet<br>\n" +
            "                        Time: 7:00 PM<br>\n" +
            "                        Kowloon Shangri-La<br>\n" +
            "                        64 Mody Road, Tsim Sha Tsui East, Kowloon Hong Kong </p>\n" +
            "                </div>\n" +
            "        </div>";
        document.getElementById('botl').innerHTML = "<iframe width=\"100%\" height=\"500\"\n" +
            "                    src=\"https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4-8%20Garden%20Rd%2C%20Central%2C%20Hong%20Kong+(St%20John's%20Cathedral)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\"\n" +
            "                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a\n" +
            "                    href=\"https://www.maps.ie/map-my-route/\">Create a route on google maps</a></iframe>";

    }

});

if( (screen.availWidth || screen.width-50) <= window.innerwidth) {
    if ((x < 992) && (x > 600)) {
        document.getElementById('topr').innerHTML = "<iframe width=\"100%\" height=\"500\"\n" +
            "                    src=\"https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4-8%20Garden%20Rd%2C%20Central%2C%20Hong%20Kong+(St%20John's%20Cathedral)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\"\n" +
            "                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a\n" +
            "                    href=\"https://www.maps.ie/map-my-route/\">Create a route on google maps</a></iframe>";
        document.getElementById('botl').innerHTML = "        <div class=\"col-lg-6 d-flex right2 text-center\" id=\"topr\">\n" +
            "            <div id=\"b_bg\">\n" +
            "                <div class=\"event_info\">\n" +
            "                    <img src=\"images/celebrate.png\" class=\"inline_icon\" alt=\"celebrate\">\n" +
            "                    <img src=\"images/dinner.png\" class=\"inline_icon\" alt=\"dinner\">\n" +
            "                    <p>Wedding Banquet<br>\n" +
            "                        Time: 7:00 PM<br>\n" +
            "                        Kowloon Shangri-La<br>\n" +
            "                        64 Mody Road, Tsim Sha Tsui East, Kowloon Hong Kong </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
    } else if ((x > 991) && (x < 1200)) {
        document.getElementById('topr').innerHTML = "        <div class=\"col-lg-6 d-flex right2 text-center\" id=\"topr\">\n" +
            "                <div class=\"event_info\">\n" +
            "                    <img src=\"images/celebrate.png\" class=\"inline_icon\" alt=\"celebrate\">\n" +
            "                    <img src=\"images/dinner.png\" class=\"inline_icon\" alt=\"dinner\">\n" +
            "                    <p>Wedding Banquet<br>\n" +
            "                        Time: 7:00 PM<br>\n" +
            "                        Kowloon Shangri-La<br>\n" +
            "                        64 Mody Road, Tsim Sha Tsui East, Kowloon Hong Kong </p>\n" +
            "                </div>\n" +
            "        </div>";
        document.getElementById('botl').innerHTML = "<iframe width=\"100%\" height=\"500\"\n" +
            "                    src=\"https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4-8%20Garden%20Rd%2C%20Central%2C%20Hong%20Kong+(St%20John's%20Cathedral)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\"\n" +
            "                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a\n" +
            "                    href=\"https://www.maps.ie/map-my-route/\">Create a route on google maps</a></iframe>";

    }
}

