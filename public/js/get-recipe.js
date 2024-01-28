async function newFormHandler(event){
    event.preventDefault();

    const title =document.getElementById('#title').value;
  


const response = await fetch(`/${title}`);
if (response.ok) {
  console.log(response);
    //document.location.replace(`/api/recipe/${title}`);
  } else {
    alert('Failed to get recipes');
  }

}

document
  .querySelector('.search-form')
  .addEventListener('submit', newFormHandler);