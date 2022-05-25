//get icon
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const themeSwitcherBtn = document.querySelectorAll(".theme-switcher");

const userThme = localStorage.getItem("theme");
const systemThme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userThme === "dark" || (!userThme && systemThme)) {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

themeSwitcherBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme;
    switch (theme) {
      case "dark": {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        break;
      }

      case "light": {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        break;
      }
      case "system": {
        localStorage.removeItem("theme");
        if (systemThme) {
          document.documentElement.classList.add("dark");
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
        } else {
          document.documentElement.classList.remove("dark");
          moonIcon.classList.add("hidden");
          sunIcon.classList.remove("hidden");
        }
        break;
      }

      default:
        break;
    }
  });
});
