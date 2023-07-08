// store the form class in a variable and add event listeners
const forms = document.querySelectorAll(".close-form");

forms.forEach((form) => {
  form.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      // get the name input
      const yourNameInput = document.getElementById("floatingInputGroup1");
      // store the name input to local storage
      localStorage.setItem("getName", yourNameInput.value);

      form.closest("form").submit();

      window.location.href = "tasks.html";
    }
  });
});

// validate the form
const validateForm = () => {
  const yourNameInput = document.getElementById("floatingInputGroup1");
  const errorElement = document.getElementById("error");
  const yourName = yourNameInput.value;

  if (yourName === "") {
    alert("Your name is required, Please enter Your Name.");
    errorElement.style.display = "block";
    yourNameInput.style.border = "2px solid red";
    return false;
  } else {
    errorElement.style.display = "none";
    yourNameInput.style.border = "2px solid green";
    return true;
  }
};

