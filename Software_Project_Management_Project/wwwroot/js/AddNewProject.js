﻿function myFunction() {
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
    detailsButton.innerHTML = "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#viewDetailsModal'>View Details <span class='glyphicon glyphicon-paperclip' aria-hidden='true'></span></button>";

    var trashButton = row.insertCell(-1);
    trashButton.innerHTML = "<button type='button' class='btn btn-danger' onclick='DeleteRowFunction(this)'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button>";
}

function DeleteRowFunction(obj) {
     var p=obj.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }

document.getElementById("reqButton").onclick = function () {
        location.href = "/home/requirmentspage";
};

function project2ModalChange(owner, ownerid, team1,team1id, team2, team2id, team3, team3id) {
    document.getElementById(ownerid).innerHTML = owner;
    document.getElementById(team1id).innerHTML = team1;
    document.getElementById(team2id).innerHTML = team2;
    document.getElementById(team3id).innerHTML = team3;
    
}

function DeleteRowFunction(obj) {
            var p = obj.parentNode.parentNode;
            p.parentNode.removeChild(p);
        }

function addOwnerFunction() {
            var ownerTable = document.getElementById("myOwnertable");
            var row = ownerTable.insertRow(1);

            // Cell 1
            var ownerName = row.insertCell(-1);
            var strong = document.createElement("strong");
            strong.innerHTML = document.getElementById("addOwner").value;
            ownerName.appendChild(strong);

            // Cell 2 For Edit Button

            var editButton = row.insertCell(-1);
            editButton.innerHTML = "<button type='button' class='btn btn-primary' onclick='table_edit_row()'>Edit</button>"


            // Cell 3 For Delete Button
            var deleteButton = row.insertCell(-1);
            deleteButton.innerHTML = "<button type='button' class='btn btn-danger' onclick='DeleteRowFunction(this)'>Delete</button>"
}

function addMemberFunction() {
            var memberTable = document.getElementById("myMembertable");
            var row = memberTable.insertRow(1);

            // Cell 1
            var memberName = row.insertCell(-1);
            var strong = document.createElement("strong");
            strong.innerHTML = document.getElementById("addMember").value;
            memberName.appendChild(strong);

            // Cell 2 For Edit Button

            var editButton = row.insertCell(-1);
            editButton.innerHTML = "<button type='button' class='btn btn-primary' onclick='table_edit()'>Edit</button>"


            // Cell 3 For Delete Button
            var deleteButton = row.insertCell(-1);
            deleteButton.innerHTML = "<button type='button' class='btn btn-danger' onclick='DeleteRowFunction(this)'>Delete</button>"
}

function addRiskFunction() {
            var riskTable = document.getElementById("myRisktable");
            var row = riskTable.insertRow(1);

            // Cell 1
            var riskName = row.insertCell(-1);
            var strong = document.createElement("strong");
            strong.innerHTML = document.getElementById("addRisk").value;
            riskName.appendChild(strong);

            // Cell 2
            var riskStatus = row.insertCell(-1);

            var weak = document.createElement("p");
            weak.innerHTML = "Status: <strong>" + document.getElementById("addRiskStatus").value + "</strong>";

            riskStatus.appendChild(weak);

            // Cell 3 For Edit Button

            var editButton = row.insertCell(-1);
            editButton.innerHTML = "<button type='button' class='btn btn-primary' onclick='table_edit()'>Edit</button>"


            // Cell 4 For Delete Button
            var deleteButton = row.insertCell(-1);
            deleteButton.innerHTML = "<button type='button' class='btn btn-danger' onclick='DeleteRowFunction(this)'>Delete</button>"
}

function printing() {

            var x = document.getElementById("myText").value;
            document.getElementById("demo").innerHTML = x;
            document.getElementById("project_name_edit").style.display = "none";
            document.getElementById("project_name_header").style.display = "none";
            document.getElementById("project_edit_button").style.display = "inline";
}

function editing() {
            document.getElementById("project_name_edit").style.display = "flex";
            document.getElementById("project_edit_button").style.display = "none";
}

function description_printing() {

            var z = document.getElementById("description").value;
            document.getElementById("description_demo").style.marginTop = "10px";
            document.getElementById("description_demo").style.marginLeft = "10px";
            document.getElementById("description_demo").innerHTML = z;
            document.getElementById("description_edit_group").style.display = "none";
            document.getElementById("description_edit_button").style.display = "inline";
        }

        function description_editing() {

            document.getElementById("description_edit_group").style.display = "inherit";
            document.getElementById("description_edit_group").style.marginLeft = "10px";
            document.getElementById("description_edit_group").style.marginBottom = "10px";
            document.getElementById("description_edit_button").style.display = "none";
            
        }

        function table_edit_row(obj) {
            var a = obj.parentNode.parentNode;
            a.parentNode.table_edit(a);
        }

function table_edit() {

            var y = document.getElementById("editName").value;
            document.getElementById("new_Name").innerHTML = y;
            
            document.getElementById("tableEditGroup").style.display = "inherit";
            document.getElementById("name_field").style.display = "none";
            
            document.getElementById("table_edit_button").style.display = "none";
            document.getElementById("table_save").style.display = "table-cell";
        }

        function table_save() {

            
            document.getElementById("new_Name").style.display = "table-cell";
            document.getElementById("editName").style.display = "none";
            document.getElementById("table_edit_button").style.display = "table-cell";
            document.getElementById("table_save").style.display = "none";
        }

        function risk_table_edit() {

            var r = document.getElementById("editRisk").value;
            document.getElementById("risk_Name").innerHTML = r;

            var s = document.getElementById("edit_Risk_Status").value;
            document.getElementById("risk_Status").innerHTML = s;

            document.getElementById("risk_Edit_group").style.display = "table-cell";
            document.getElementById("risk_Edit_Status_group").style.display = "table-cell";

            document.getElementById("risk_demo").style.display = "none";
            document.getElementById("status_demo").style.display = "none";

            document.getElementById("risk_Edit_button").style.display = "none";
            document.getElementById("risk_Save_button").style.display = "table-cell";
        }

        function risk_table_save() {

            document.getElementById("risk_Name").style.display = "table-cell";
            document.getElementById("risk_Status").style.display = "table-cell";

            document.getElementById("risk_Edit_group").style.display = "none";
            document.getElementById("risk_Edit_Status_group").style.display = "none";

            document.getElementById("risk_Edit_button").style.display = "table-cell";
            document.getElementById("risk_Save_button").style.display = "none";
        }