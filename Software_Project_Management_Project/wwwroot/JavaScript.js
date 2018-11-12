var  = ["Req 1", "Req 2", "Req 3", "Req 4", "Req 5"]
var str = '<ul>'

slides.forEach(function (slide) {
    str += '<li>' + slide + '</li>';
});

str += '</ul>';
document.getElementById("slideContainer").innerHTML = str;
<div id="slideContainer"></div>