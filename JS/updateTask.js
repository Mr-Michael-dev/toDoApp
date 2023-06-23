document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var inputText1 = document.getElementById('floatingInput').value;
    var inputText2 = document.getElementById('floatingTextarea1').value;
    var date = document.getElementById('date').value;


    var newListElement = document.createElement('li');
    var newDiv = document.createElement('div');
    var H3 = document.createElement('h3');
    var para = document.createElement('p');
    var dateParagraph = document.createElement('p');
    var Done = document.createElement('button');
    var Remove = document.createElement('button');
    
    Done.textContent = 'Done';
    Remove.textContent = 'Remove';
    H3.textContent = inputText1;
    para.textContent = inputText2;
    dateParagraph.textContent = date;
    
    newListElement.appendChild(newDiv);
    newDiv.appendChild(H3);
    newDiv.appendChild(para);
    newDiv.appendChild(dateParagraph);
    newDiv.appendChild(Done);
    newDiv.appendChild(Remove);
    
    H3.style.color = 'red';
    dateParagraph.style.color = 'grey';
    
  
    Done.addEventListener('click', () => {
      alert('Congratulations, you have completed your task.');
  
      var newListElement2 = document.createElement('li'); // Create new list element
      var newDiv2 = document.createElement('div');
      var H32 = document.createElement('h4');
      var para2 = document.createElement('p');
  
      H32.textContent = H3.textContent;
      para2.textContent = para.textContent;
  
      H32.style.color = 'green';
      newListElement2.appendChild(newDiv2);
      newDiv2.appendChild(H32);
      newDiv2.appendChild(para2);
  
      document.getElementById('myList2').appendChild(newListElement2);
      newListElement.remove();
    });
  
    Remove.addEventListener('click', () => {
      var confirmationMessage = document.getElementById('confirmationMessage');
  
      if (!confirmationMessage) {
        confirmationMessage = document.createElement('div');
        confirmationMessage.id = 'confirmationMessage';
        confirmationMessage.innerHTML = 'Are you sure you want to remove the task? <button id="yes">Yes</button> <button id="no">No</button>';
        newListElement.appendChild(confirmationMessage);
  
        var yes = document.getElementById('yes');
        var no = document.getElementById('no');
  
        if (yes) {
          yes.addEventListener('click', () => {
            newListElement.remove();
          });
        }
  
        if (no) {
          no.addEventListener('click', () => {
            confirmationMessage.remove();
          });
        }    
      }
    });
  
    document.getElementById('myList1').appendChild(newListElement);
   
    this.reset();
  });
  