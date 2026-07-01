let uploaded = 0;
let validated = 0;
let rejected = 0;



function uploadClaim(){


let patient =
document.getElementById("patientName").value;


let type =
document.getElementById("claimType").value;


let amount =
document.getElementById("amount").value;



if(patient=="" || type=="" || amount==""){

alert("Fill all fields");

return;

}



uploaded++;



let status;
let css;



if(Math.random()>0.3){

status="Validated";

css="valid";

validated++;

}

else{

status="Rejected";

css="reject";

rejected++;

}



document.getElementById("uploaded").innerHTML=
uploaded;


document.getElementById("validated").innerHTML=
validated;


document.getElementById("rejected").innerHTML=
rejected;



let table=
document.getElementById("tableBody");


let row=
table.insertRow(0);



let id=
Math.floor(Math.random()*10000);



row.innerHTML=`

<td>${id}</td>

<td>${patient}</td>

<td>${type}</td>

<td>₹${amount}</td>

<td class="${css}">${status}</td>

`;



document.getElementById("patientName").value="";
document.getElementById("claimType").value="";
document.getElementById("amount").value="";


}