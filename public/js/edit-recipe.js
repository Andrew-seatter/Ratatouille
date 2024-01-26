async function newFormHandler(event){
    event.preventDefault();

    const title =document.querySelector('#title').value;
    const description=document.querySelector('#description').value;
    const ingredients=document.querySelector('#ingredients').value;
    const instructions=document.querySelector('#instructions').value;
    const comments=document.querySelector('#comments').value;
    const userid=document.querySelector('#userid').value;

    const id= window.location.toString.split('/')[window.location.toString.split('/').length-1];

const response = await fetch(`api/recipe/${id}`,{
    method:'PUT',
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
    document.location.replace(`/recipe/${id}`);

  } else {
    alert('Failed to edit dish');
  }

}

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);