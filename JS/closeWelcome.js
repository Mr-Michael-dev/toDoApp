// store the form class in a variable and add event listeners
const forms = document.querySelectorAll('.form');

forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (
        validateForm()) {
            closeHome();
            displayTasks();
            getName();
        };
        
    });
});

// validate the form
const validateForm = () => {
    const yourNameInput = document.getElementById('floatingInputGroup1');
    const errorElement = document.getElementById('error');
    const yourName = yourNameInput.value;

    if (yourName === '') {
        alert('Your name is required, Please enter Your Name.');
       errorElement.style.display = 'block';
       yourNameInput.style.border = '2px solid red';
      return false;
    } else {
        errorElement.style.display = 'none';
        yourNameInput.style.border = '';
        return true;
    }
};

// close the welcome page
const closeHome = () => {
    const closeHome = document.getElementById('closeWelcome');
    setTimeout(() => {
        closeHome.style.display = 'none';
        task.style.transform = 'translateX(+100%)';
    }, 200);
     
}

// display the task session

const displayTasks = () => {   
    const task = document.getElementById('displayTask');

    task.style.opacity = '0';
    task.style.transform = 'translateX(-100%)';
    task.style.display = 'block';
    setTimeout(() => {
        task.style.opacity = '1';
        task.style.transform = 'translateX(0)';
    }, 200);
    
};

// get the name input and attach to the greeting
const getName = () => {
    const yourNameInput = document.getElementById('floatingInputGroup1');
    const yourName = yourNameInput.value;
        const name = document.getElementById('name')
        name.innerHTML = yourName;
        
};