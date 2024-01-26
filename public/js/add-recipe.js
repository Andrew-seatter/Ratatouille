const submit = document.querySelector('#submit-button');

async function newFormHandler(event){
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
    const author = 'placholder';
    const image = document.querySelector('#image').value;
    const user_id = session.user_id;
    

   // document.getElementById("myForm").enctype = "multipart/form-data";
   // document.getElementById("myForm").method = "post";
   //document.getElementById("myForm").action = "/api/users";
   console.log('newFormHandler');

const response = await fetch(`/api/recipe`,{
    method:'POST',
    body:JSON.stringify({
        author, 
        title,
        ingredients,
        instructions,
        image,
      }),
    headers:{
        'Content-Type':'application/json',
    },
});
if (response.ok) {
   console.log(response);
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }

}

document.querySelector('.new-recipe-form');
submit.addEventListener('click', newFormHandler);