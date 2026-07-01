function detectAnomaly() {

    let amount =
        document.getElementById("claimAmount").value;

    let result =
        document.getElementById("result");

    if(amount === ""){
        result.innerHTML =
            "⚠ Please enter a claim amount";
        result.style.color = "orange";
        return;
    }

    if(amount > 100000){

        result.innerHTML =
            "🚨 Anomaly Detected! High Claim Amount";

        result.style.color = "red";

    }else{

        result.innerHTML =
            "✅ Normal Claim";

        result.style.color = "green";
    }
}