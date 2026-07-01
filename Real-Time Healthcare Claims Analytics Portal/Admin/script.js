function addUser(){

    let username =
        document.getElementById("username").value;

    let role =
        document.getElementById("role").value;

    if(username === ""){

        alert("Please enter username");
        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML =
        "👤 " + username + " - " + role;

    document.getElementById("userList")
        .appendChild(li);

    document.getElementById("username").value="";
}