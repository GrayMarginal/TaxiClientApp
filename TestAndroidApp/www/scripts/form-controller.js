$(document).ready(function(){
var timeSetter = setInterval(function(){
    document.getElementById("arrivalTime").value=new Date().getHours()+':'+new Date().getMinutes();
    document.getElementById("arrivalTime").min=new Date().getHours()+':'+new Date().getMinutes();
}, 1000);
})