function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);

    // Cell 1
    var projectName = row.insertCell(-1);
    var strong = document.createElement("strong");
    strong.innerHTML = document.getElementById("newProjectForm").value;
    projectName.appendChild(strong);

    // Cell 2
    projectName = row.insertCell(-1);
    strong = document.createElement("strong");
    strong.innerHTML = document.getElementById("newProjectForm").value;
    projectName.appendChild(strong);
}


document.getElementById("add").onclick = myFunction();