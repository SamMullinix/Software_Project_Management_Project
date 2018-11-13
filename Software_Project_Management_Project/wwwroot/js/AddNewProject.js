function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);

    // Cell 1
    var projectName = row.insertCell(0);
    var strong = document.createElement("strong");
    strong.innerHTML = document.getElementById("newProjectForm").value;
    projectName.appendChild(strong);

    // Cell 2
    //var reqButton = row.insertCell(1);

}

/* 
<td><p><strong>ProjectName 3C</strong></p></td>
                            <td><button type="button" class="btn btn-primary">View REQ
                                    <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                </button></td>
                            <td><button type="button" class="btn btn-info">View Details
                                    <span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span>
                                </button></td>
                            <td><button type="button" class="btn btn-danger">
                                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </button></td> */