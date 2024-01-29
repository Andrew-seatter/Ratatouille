async function newFormHandler(event){
    event.preventDefault();

    const title =document.getElementById('title').value;
console.log(title,"Search");


const response = await fetch(`/${title}`,{
  method:'GET',
  headers:{
    'content-Type':'application/json',
  },
});
if (response.ok) {
  //const data=response.json();
  //console.log(data,"Result");
  console.log(  );
  } else {
    alert('Failed to get recipes');
  }

}

document
  .querySelector('.search-form')
  .addEventListener('submit', newFormHandler);