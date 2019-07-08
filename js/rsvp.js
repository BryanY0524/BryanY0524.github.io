
document.getElementById("guestnum").addEventListener("change", function(){
    var c_num = document.getElementById("guestnum").value;
    if (c_num === '10'){
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
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=false;
        document.getElementById("guest9").hidden=false;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '8'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=false;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '7'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=false;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '6'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=false;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '5'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=false;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '4'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=false;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '3'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=false;
        document.getElementById("guest4").hidden=true;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '2'){
        document.getElementById("guest2").hidden=false;
        document.getElementById("guest3").hidden=true;
        document.getElementById("guest4").hidden=true;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
    else if (c_num === '1'){
        document.getElementById("guest2").hidden=true;
        document.getElementById("guest3").hidden=true;
        document.getElementById("guest4").hidden=true;
        document.getElementById("guest5").hidden=true;
        document.getElementById("guest6").hidden=true;
        document.getElementById("guest7").hidden=true;
        document.getElementById("guest8").hidden=true;
        document.getElementById("guest9").hidden=true;
        document.getElementById("guest10").hidden=true;
    }
});


