let totalClaims = 0;
let processedClaims = 0;
let alerts = 0;



function updateDashboard(){


totalClaims += Math.floor(Math.random()*10)+1;


processedClaims += Math.floor(Math.random()*8)+1;


alerts += Math.floor(Math.random()*2);



let speed = Math.floor(Math.random()*100)+50;



document.getElementById("claims").innerHTML =
totalClaims;


document.getElementById("processed").innerHTML =
processedClaims;


document.getElementById("alerts").innerHTML =
alerts;


document.getElementById("speed").innerHTML =
speed + "/s";



let progress =
(processedClaims/totalClaims)*100;


if(progress>100){

progress=100;

}



document.getElementById("progressBar").style.width =
progress + "%";


document.getElementById("percentage").innerHTML =
Math.floor(progress)+"%";



addClaim();

}



function addClaim(){


let table =
document.getElementById("tableBody");



let row =
table.insertRow(0);



let id =
Math.floor(Math.random()*9000)+1000;



let score =
(Math.random()*100).toFixed(1);



let status =
score>70 ? "High Risk":"Normal";



let css =
score>70 ? "high":"normal";



let time =
new Date().toLocaleTimeString();



row.innerHTML = `

<td>${id}</td>

<td>Patient ${id}</td>

<td class="${css}">${status}</td>

<td>${score}</td>

<td>${time}</td>

`;



if(table.rows.length>10){

table.deleteRow(10);

}


}



setInterval(updateDashboard,2000);