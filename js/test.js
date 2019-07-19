sdl = mbStrWidth(sday);
shl = mbStrWidth(shours);
sml = mbStrWidth(smin);
ssl = mbStrWidth(ss);

dayend = 'DAYS';
hrend = 'HR';
minend = 'MIN';
send = 'S';

del = mbStrWidth(dayend);
hel = mbStrWidth(hrend);
mel = mbStrWidth(minend);
sel = mbStrWidth(send);

while (shl != hel) {
    if (shl < hel) {
        shours = ' ' + shours;
        shl = mbStrWidth(shours);
    } else if (shl > hel) {
        hrend = hrend + ' ';
        hel = mbStrWidth(hrend);
    }
}

while (sdl != del) {
    if (sdl < del) {
        sday = ' ' + sday;
        sdl = mbStrWidth(sday);
    } else if (sdl > del) {
        dayend = dayend + ' ';
        del = mbStrWidth(dayend);
    }
}

while (sml != mel) {
    if (sml < mel) {
        smin = "&nbsp;" + smin;
        sml = mbStrWidth(smin);
    } else if (sml > mel) {
        minend = minend + ' ';
        mel = mbStrWidth(minend);
    }
}

while (ssl != sel) {
    if (ssl < sel) {
        ss = ' ' + ss;
        ssl = mbStrWidth(ss);
    } else if (ssl > sel) {
        send = send + ' ';
        sel = mbStrWidth(send);
    }
}

daytotal = sday + ' ' + dayend;
hrtotal = shours + ' ' + hrend;
mintotal = smin + ' ' + minend;
stotal = ss + ' ' + send;

document.getElementById("countdownday").innerHTML = daytotal + "&nbsp;";
document.getElementById("countdownhr").innerHTML = hrtotal + "&nbsp;";
document.getElementById("countdownmin").innerHTML = mintotal + "&nbsp;";
document.getElementById("countdowns").innerHTML = stotal;
