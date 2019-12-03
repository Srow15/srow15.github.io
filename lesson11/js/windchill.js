
function windChill() {
    

    var temp = document.getElementById("high").innerHTML;
    var windSpeed = document.getElementById("speed").innerHTML;

    if (temp <= 50 && windSpeed >= 0) {
        
        var a = 35.75 + (0.6215 * temp);
        var b = 35.75 * Math.pow(windSpeed, 0.16);
        var c = 0.4275 * temp * Math.pow(windSpeed, 0.16);
        var d = a - b + c;

        document.getElementById("windchill").innerHTML = d.toFixed(0);
    }
    else {
        document.getElementById("windchill").innerHTML = "N/A" ;
    }

} 

windChill()
    

