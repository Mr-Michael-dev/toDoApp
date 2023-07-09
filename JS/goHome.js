home.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior

  // Show confirmation dialog and check if the user wants to exit
  const confirmExit = confirm(
    "This will clear all existing tasks. Are you sure you want to exit?"
  );

  if (confirmExit) {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "index.html";
  }
});


