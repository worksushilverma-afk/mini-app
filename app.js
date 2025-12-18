const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;
const ADMIN_ID = 123456789; // replace with YOUR Telegram ID

let balance = 10000;
let growth = 1.01;

if (user) {
  document.getElementById("username").innerText =
    `Welcome, ${user.first_name}`;
  document.getElementById("userid").innerText =
    `ID: ${user.id}`;

  if (user.id === ADMIN_ID) {
    document.getElementById("admin").classList.remove("hidden");
  }
}

function updateBalance() {
  balance *= growth;
  document.getElementById("balance").innerText =
    `$${balance.toFixed(2)}`;
}

// Simulation
setInterval(updateBalance, 3000);

// Chart
const ctx = document.getElementById("chart").getContext("2d");
let dataPoints = [balance];

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Start'],
    datasets: [{
      label: 'Demo Growth',
      data: dataPoints,
      borderColor: '#00d2ff',
      fill: false
    }]
  }
});

setInterval(() => {
  dataPoints.push(balance);
  chart.data.labels.push('');
  chart.update();
}, 5000);

// Buttons
document.querySelectorAll(".btn").forEach(btn => {
  btn.onclick = () => tg.showAlert("Demo feature 🚀");
});
