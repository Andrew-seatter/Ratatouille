async function newFormHandler(event){
    event.preventDefault();

    const title =document.querySelector('#title').value;
    const description=document.querySelector('#description').value;
    const ingredients=document.querySelector('#ingredients').value;
    const instructions=document.querySelector('#instructions').value;
    const comments=document.querySelector('#comments').value;
    const userid=document.querySelector('#userid').value;


const response = await fetch(`api/recipe`);
if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to get dishes');
  }

}

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);