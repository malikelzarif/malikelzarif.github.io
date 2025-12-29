const toggle = document.getElementById("themeToggle");

toggle?.addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.gtag) {
      gtag("event","click",{event_label:link.href});
    }
  });
});