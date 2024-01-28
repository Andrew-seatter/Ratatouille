async function newFormHandler(event){
    event.preventDefault();

    const title =document.getElementById('title').value;
  


const response = await fetch(`/${title}`,{
  method:'GET',
  headers:{
    'content-Type':'application/json',
  },
});
if (response.ok) {
  console.log(response);
    document.location.replace(`/${title}`);
  } else {
    alert('Failed to get recipes');
  }

}

document
  .querySelector('.search-form')
  .addEventListener('submit', newFormHandler);