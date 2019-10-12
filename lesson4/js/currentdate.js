function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


var today = new Date()
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var dow = weekday[today.getDay()];
var dd =  today.getDate()
var mmm = today.getMonth()+1;
var yyyy = today.getFullYear();

today = dow + ", " + mmm + " " + dd + ", " + yyyy;
document.getElementById("todays-date").innerHTML = today;
