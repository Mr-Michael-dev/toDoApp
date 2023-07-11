const home = document.getElementById("home");

home.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "index.html";
});
