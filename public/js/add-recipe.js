const submit = document.querySelector('#submit-button');
//const { User } = require('../../models');
let now = moment();
let timestamp = now.toDate();

async function newFormHandler(event){
    event.preventDefault();
    
    const title = document.querySelector('#title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
    const author = document.querySelector('#author');
    const image = document.querySelector('#image').value;
  

   const response = await fetch('/api/recipe',{
    method:'POST',
    body: JSON.stringify({
        author, 
        title,
        ingredients,
        instructions,
        image,
        timestamp
        

      }),
    headers:{
        'Content-Type':'application/json',
    },
});
if (response.ok) {
   console.log(response);
    //document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }

};

document.querySelector('.new-recipe-form');
submit.addEventListener('click', newFormHandler);

