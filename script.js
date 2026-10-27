


const buttonAddTsk = document.getElementById('add-task');
   
   buttonAddTsk.addEventListener('click',function (element) {


    element.preventDefault();

    const inputTitle = document.getElementById('title');
    let titleValue = inputTitle.value;
    console.log(titleValue);
    inputTitle.value = "";

    const description = document.getElementById('description');
    let descriptionValue =description.value;
    console.log(descriptionValue);
    description.value = "";
     
    const status = document.getElementById('status');
    let statusValue = status.value;
    console.log(statusValue);
    
    

    if (!titleValue || !descriptionValue) {
        alert('ecrire le titre et description');
       
    }
   
  
    
    const tasks = document.getElementById('tasks');


     const h3 = document.createElement('h3');
     h3.innerHTML = titleValue;
     tasks.appendChild(h3)

     const p = document.createElement('p');
     p.innerHTML = descriptionValue;
     tasks.appendChild(p);

     const span = document.createElement('span');
     span.innerHTML = statusValue;
     tasks.appendChild(span);
    
    



   })
    