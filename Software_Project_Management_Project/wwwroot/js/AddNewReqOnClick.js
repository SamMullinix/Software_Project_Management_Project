<<<<<<< HEAD:Software_Project_Management_Project/wwwroot/JavaScript.js
﻿var  = ["Req 1", "Req 2", "Req 3", "Req 4", "Req 5"]
var str = '<ul>'

slides.forEach(function (slide) {
    str += '<li>' + slide + '</li>';
});

str += '</ul>';
document.getElementById("slideContainer").innerHTML = str;
<div id="slideContainer"></div>
=======
﻿var throwConnectBox = function () {
    chat_box = document.getElementById('box');
    div = window.parent.document.createElement('div');
    input = window.parent.document.createElement('input');
    input.type = "submit";
    input.value = "Join chat";
    input.onclick = function () { conn.send('$connect\r\n'); };
    div.appendChild(input);
    chat_box.appendChild(div);
}

onload() => console.log("test");
>>>>>>> a597174f616b2107d40e3ff533b65f91e5d21152:Software_Project_Management_Project/wwwroot/js/AddNewReqOnClick.js
