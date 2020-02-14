
document.getElementById("guestnum").addEventListener("change", function(){
    var c_num = document.getElementById("guestnum").value;
    if (c_num === '10'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=false;
        document.getElementById("guest9").hidden=false;
        document.getElementById("guest10").hidden=false;
    }
    else if (c_num === '9'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=false;
        document.getElementById("guest9").hidden=false;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
    }
    else if (c_num === '8'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=false;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
    }
    else if (c_num === '7'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
    }
    else if (c_num === '6'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
        document.getElementById("guest7n").value = '';
    }
    else if (c_num === '5'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
        document.getElementById("guest7n").value = '';
        document.getElementById("guest6n").value = '';

    }
    else if (c_num === '4'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
        document.getElementById("guest7n").value = '';
        document.getElementById("guest6n").value = '';
        document.getElementById("guest5n").value = '';

    }
    else if (c_num === '3'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=true;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
        document.getElementById("guest7n").value = '';
        document.getElementById("guest6n").value = '';
        document.getElementById("guest5n").value = '';
        document.getElementById("guest4n").value = '';
    }
    else if (c_num === '2'){
        document.getElementById("buttons").hidden=false;
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=true;
        document.getElementById("guest4").hidden=true;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
        document.getElementById("guest7n").value = '';
        document.getElementById("guest6n").value = '';
        document.getElementById("guest5n").value = '';
        document.getElementById("guest4n").value = '';
        document.getElementById("guest3n").value = '';
    }
    else if (c_num === '1'){
        document.getElementById("buttons").hidden=true;
        document.getElementById("guest2").hidden=true;
        document.getElementById("guest3").hidden=true;
        document.getElementById("guest4").hidden=true;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
        document.getElementById("guest10n").value = '';
        document.getElementById("guest9n").value = '';
        document.getElementById("guest8n").value = '';
        document.getElementById("guest7n").value = '';
        document.getElementById("guest6n").value = '';
        document.getElementById("guest5n").value = '';
        document.getElementById("guest4n").value = '';
        document.getElementById("guest3n").value = '';
        document.getElementById("guest2n").value = '';
    }
});


