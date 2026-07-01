function saveData(){

    let patient =
        document.getElementById("patientName").value;

    let amount =
        document.getElementById("claimAmount").value;

    if(patient === "" || amount === ""){
        alert("Please fill all fields");
        return;
    }

    let row =
        document.createElement("tr");

    row.innerHTML =
        "<td>" + patient + "</td>" +
        "<td>₹" + amount + "</td>";

    document.getElementById("dataTable")
        .appendChild(row);

    document.getElementById("patientName").value = "";
    document.getElementById("claimAmount").value = "";
}