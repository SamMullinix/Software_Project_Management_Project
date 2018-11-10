var rowNumber = 6;

function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(rowNumber);
    rowNumber++;
    var projectName = row.insertCell(0);
    projectName.style = "font-size: 150%";
    projectName.innerHTML = 
}