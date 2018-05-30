
var r = Math.floor((Math.random()*3));

var colors = ["#0e55fe", "#EB1059", "#F9E863"];

$(".nav-wrapper").css("border-bottom-color", colors[r]);
$("footer").css("border-top-color", colors[r]);
