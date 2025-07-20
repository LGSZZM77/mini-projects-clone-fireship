const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");
const solarButton = document.querySelector("#solar");
const body = document.body;

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

solarButton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarButton.style.cssText = `--bg-solar: var(--yellow)`;

    solarButton.innerText = "solarize";
  } else {
    body.classList.add("solar");
    solarButton.style.cssText = `--bg-solar: white`;

    solarButton.innerText = "normalize";
  }
};
