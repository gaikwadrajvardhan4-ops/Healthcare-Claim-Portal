function openDashboard() {
  const msg = document.getElementById("msg");

  msg.innerText = "Opening Dashboard...";

  setTimeout(() => {
    // change this to your actual dashboard page
    window.location.href = "dashboard.html";
  }, 1000);
}