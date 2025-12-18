const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById("username").innerText =
    `Welcome, ${user.first_name}`;
  document.getElementById("userid").innerText =
    `User ID: ${user.id}`;
}

// Example action handling
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    tg.showAlert("Feature coming soon 🚀");
  });
});
