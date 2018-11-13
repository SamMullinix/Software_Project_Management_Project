function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);

    // Cell 1
    var projectName = row.insertCell(-1);
    var strong = document.createElement("strong");
    strong.innerHTML = document.getElementById("newProjectForm").value;
    projectName.appendChild(strong);


    var reqButton = row.insertCell(-1);
    reqButton.innerHTML = "<button type='button' class='btn btn-primary'>View REQ <span class='glyphicon glyphicon-list-alt' aria-hidden='true'></span></button>";

    var detailsButton = row.insertCell(-1);
    detailsButton.innerHTML = "<button type='button' class='btn btn-info'>View Details<span class='glyphicon glyphicon-paperclip' aria-hidden='true'></span></button>";

    var trashButton = row.insertCell(-1);
    trashButton.innerHTML = "<button type='button' class='btn btn-danger' onclick='DeleteRowFunction(this)'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button>";
}

function DeleteRowFunction(obj) {
     var p=obj.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }