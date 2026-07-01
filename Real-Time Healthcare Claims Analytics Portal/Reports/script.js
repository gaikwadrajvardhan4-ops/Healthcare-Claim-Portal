function generateReport(){

    let report =
        document.getElementById("reportName").value;

    if(report === ""){
        alert("Please enter report name");
        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML =
        "📄 " + report + " Report Generated";

    document.getElementById("reportList")
        .appendChild(li);

    document.getElementById("reportName").value="";
}

function sendAlert(){

    document.getElementById("alertMessage")
        .innerHTML =
        "🚨 Alert Sent Successfully!";
}