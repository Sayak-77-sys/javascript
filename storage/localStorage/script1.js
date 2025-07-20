/*function toggleTheme() {

  const body = document.body;
  if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
}


toggleTheme();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", toggleTheme);

*/

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");

    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}