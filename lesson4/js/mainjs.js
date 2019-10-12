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
var month = new Array(12);
month[0] = Jan;
month[1] = Feb;
month[2] = Mar;
month[3] = Apr;
month[4] = May;
month[5] = Jun;
month[6] = Jul;
month[7] = Aug;
month[8] = Sep;
month[9] = Oct;
month[10] = Nov;
month[11] = Dec;
var dow = weekday[today.getDay()];
var dd =  today.getDate()
var mm = month[today.getMonth()];
var yyyy = today.getFullYear();

today = " " + dow + ", " + mm + " " + dd + ", " + yyyy;
document.getElementById("currentdate").innerHTML = today;
