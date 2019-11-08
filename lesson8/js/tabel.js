var today = new Date()

var mm = today.getMonth();
var dd =  today.getDate()
var yyyy = today.getFullYear();

today = " " + mm + "." + dd + "." + yyyy;
document.getElementById("date").innerHTML = today;