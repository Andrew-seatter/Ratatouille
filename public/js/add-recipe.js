async function newFormHandler(event){
    event.preventDefault();

    const title =document.querySelector('#title').value;
    const description=document.querySelector('#description').value;
    const ingredients=document.querySelector('#ingredients').value;
    const instructions=document.querySelector('#instructions').value;
    const comments=document.querySelector('#comments').value;
    const userid=document.querySelector('#userid').value;
    document.getElementById("myForm").enctype = "multipart/form-data";
    document.getElementById("myForm").method = "post";
    document.getElementById("myForm").action = "/api/users";

const response = await fetch(`api/recipe`,{
    method:'POST',
    body:JSON.stringify({
        title,
        description,
        ingredients,
        instructions,
        comments,
        userid
    }),
    headers:{
        'Content-Type':'application/json',
    },
});
if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }

}

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler)