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