const body = document.body;
const btn = document.getElementById("toggleBtn");

let isDark = false;

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  isDark = !isDark;
  btn.innerText = isDark ? "Light Theme" : "Dark Theme";
});
