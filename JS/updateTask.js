document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  validateInput();

  if (validateInput()) {
    updateTasks();
    this.reset();
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function validateInput() {
  let task = document.getElementById("floatingInput");
  let taskDiscription = document.getElementById("floatingTextarea1");
  let date = document.getElementById("date");

  const taskValue = task.value.trim();
  const taskDiscriptionValue = taskDiscription.value.trim();
  const dateValue = date.value.trim();

  if (taskValue === "") {
    setError(task, "Please enter your task");
    return false;
  } else {
    setSuccess(task);
  }

  if (taskDiscriptionValue === "") {
    setError(taskDiscription, "Please describe your task");
    return false;
  } else if (taskDiscriptionValue.length <= 15) {
    setError(taskDiscription, "Descriptions must be at least 15 characters");
    return false;
  } else {
    setSuccess(taskDiscription);
  }

  if (dateValue === "") {
    setError(date, "Please enter a task deadline");
    return false;
  } else {
    setSuccess(date);
  }

  return true;
}

function updateTasks() {
  let task = document.getElementById("floatingInput");
  let taskDiscription = document.getElementById("floatingTextarea1");
  let date = document.getElementById("date");

  let newListElement = document.createElement("li");
  let newDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let para = document.createElement("p");
  let dateParagraph = document.createElement("p");
  let done = document.createElement("button");
  let remove = document.createElement("button");

  done.textContent = "Done";
  remove.textContent = "Remove";
  h3.textContent = task.value;
  para.textContent = taskDiscription.value;
  dateParagraph.textContent = date.value;

  newListElement.appendChild(newDiv);
  newDiv.appendChild(h3);
  newDiv.appendChild(para);
  newDiv.appendChild(dateParagraph);
  newDiv.appendChild(done);
  newDiv.appendChild(remove);

  h3.style.color = "red";
  h3.style.textTransform = "capitalize";
  dateParagraph.style.color = "grey";
  done.style.border = "none";
  done.style.margin = "2px";
  done.style.padding = "2px";
  done.style.borderRadius = "8px";
  done.style.backgroundColor = "green";
  done.style.color = "white";
  done.classList.add("done");
  done.setAttribute("data-bs-toggle", "modal");
  done.setAttribute("data-bs-target", "#exampleModal");
  remove.style.border = "none";
  remove.style.margin = "2px";
  remove.style.padding = "2px";
  remove.style.borderRadius = "8px";
  remove.style.backgroundColor = "red";
  remove.style.color = "white";
  remove.classList.add("remove");
  para.classList.add("para");
  dateParagraph.classList.add("datePara");

  done.addEventListener("click", () => {
    const newListElement2 = document.createElement("li"); // Create new list element
    const newDiv2 = document.createElement("div");
    const h4 = document.createElement("h4");
    const para2 = document.createElement("p");
    const datepara2 = document.createElement("p");

    h4.textContent = h3.textContent;
    para2.textContent = para.textContent;
    datepara2.textContent = "Completed on: " + dateParagraph.textContent;

    h4.style.color = "green";
    newListElement2.appendChild(newDiv2);
    newDiv2.appendChild(h4);
    newDiv2.appendChild(para2);
    newDiv2.appendChild(datepara2);

    document.getElementById("myList2").appendChild(newListElement2);
    newListElement.remove();

    updateTaskCount();

    storeTasks();
  });

  remove.addEventListener("click", () => {
    var confirmationMessage = document.getElementById("confirmationMessage");

    if (!confirmationMessage) {
      confirmationMessage = document.createElement("div");
      confirmationMessage.id = "confirmationMessage";
      confirmationMessage.innerHTML =
        'Are you sure you want to remove the task? <button id="yes">Yes</button> <button id="no">No</button>';
      newListElement.appendChild(confirmationMessage);

      var yes = document.getElementById("yes");
      var no = document.getElementById("no");

      if (yes) {
        yes.addEventListener("click", () => {
          newListElement.remove();
          confirmationMessage.remove();
          updateTaskCount();
          storeTasks();
        });
      }

      if (no) {
        no.addEventListener("click", () => {
          confirmationMessage.remove();
        });
      }

      no.style.border = "none";
      no.style.margin = "2px";
      no.style.padding = "2px";
      no.style.borderRadius = "8px";
      no.style.backgroundColor = "green";
      no.style.color = "white";
      yes.style.border = "none";
      yes.style.margin = "2px";
      yes.style.padding = "2px";
      yes.style.borderRadius = "8px";
      yes.style.backgroundColor = "red";
      yes.style.color = "white";
    }
  });

  document.getElementById("myList1").appendChild(newListElement);

  updateTaskCount();

  storeTasks();
}

function attachEventListeners() {
  let dones = document.querySelectorAll(".done");

  dones.forEach((done) => {
    done.addEventListener("click", () => {
      alert("Congratulations, you have completed your task.");

      const newListElement2 = document.createElement("li"); // Create new list element
      const newDiv2 = document.createElement("div");
      const h4 = document.createElement("h4");
      const para2 = document.createElement("p");
      const datepara2 = document.createElement("p");

      h4.textContent = done.parentElement.querySelector("h3").textContent;
      para2.textContent = done.parentElement.querySelector(".para").textContent;
      datepara2.textContent =
        "Completed on: " +
        done.parentElement.querySelector(".datePara").textContent;

      h4.style.color = "green";
      newListElement2.appendChild(newDiv2);
      newDiv2.appendChild(h4);
      newDiv2.appendChild(para2);
      newDiv2.appendChild(datepara2);

      document.getElementById("myList2").appendChild(newListElement2);
      done.closest("li").remove();

      updateTaskCount();

      storeTasks();
    });
  });

  let removes = document.querySelectorAll(".remove");

  removes.forEach((remove) => {
    remove.addEventListener("click", () => {
      var confirmationMessage = document.getElementById("confirmationMessage");

      if (!confirmationMessage) {
        confirmationMessage = document.createElement("div");
        confirmationMessage.id = "confirmationMessage";
        confirmationMessage.innerHTML =
          'Are you sure you want to remove the task? <button id="yes">Yes</button> <button id="no">No</button>';
        remove.parentElement.appendChild(confirmationMessage);

        var yes = document.getElementById("yes");
        var no = document.getElementById("no");

        if (yes) {
          yes.addEventListener("click", () => {
            remove.parentElement.parentElement.remove();
            confirmationMessage.remove();
            updateTaskCount();
            storeTasks();
          });
        }

        if (no) {
          no.addEventListener("click", () => {
            confirmationMessage.remove();
          });
        }

        no.style.border = "none";
        no.style.margin = "2px";
        no.style.padding = "2px";
        no.style.borderRadius = "8px";
        no.style.backgroundColor = "green";
        no.style.color = "white";
        yes.style.border = "none";
        yes.style.margin = "2px";
        yes.style.padding = "2px";
        yes.style.borderRadius = "8px";
        yes.style.backgroundColor = "red";
        yes.style.color = "white";
      }
    });
  });
}

updateTaskCount = () => {
  const taskList1 = document.getElementById("myList1");

  const taskList2 = document.getElementById("myList2");

  const totalList1 = taskList1.getElementsByTagName("li").length;

  const totalList2 = taskList2.getElementsByTagName("li").length;

  const taskCountElement = document.getElementById("taskCount1");

  const taskCountElement2 = document.getElementById("taskCount2");

  taskCountElement.innerText = "Total tasks: " + totalList1;

  taskCountElement2.innerText = "Total tasks: " + totalList2;
};

updateTaskCount();

function storeTasks() {
  const taskList1 = document.getElementById("myList1").innerHTML;

  const taskList2 = document.getElementById("myList2").innerHTML;

  localStorage.setItem("taskList1", taskList1);

  localStorage.setItem("taskList2", taskList2);
}

function retrieveTasks() {
  const taskList1 = localStorage.getItem("taskList1");
  const taskList2 = localStorage.getItem("taskList2");

  if (taskList1) {
    document.getElementById("myList1").innerHTML = taskList1;
    updateTaskCount();
    attachEventListeners();
  }

  if (taskList2) {
    document.getElementById("myList2").innerHTML = taskList2;
  }

  updateTaskCount();
  storeTasks();
}

retrieveTasks();

const yourName = localStorage.getItem("getName");
const name = document.getElementById("name");
name.innerHTML = yourName;

sessionStorage.setItem("sessionDisplayed", "true");

window.addEventListener("DOMContentLoaded", () => {
  const sessionDisplayed = sessionStorage.getItem("sessionDisplayed");

  if (sessionDisplayed === "true") {
    const welcomeMessage = document.getElementById("welcomeMessage");

    welcomeMessage.style.display = "block";
    sessionStorage.setItem("sessionDisplayed", "false");
  }
});
