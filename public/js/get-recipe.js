async function newFormHandler(event){
  event.preventDefault();

  const title = document.getElementById('title').value;
console.log(title, "Search");


const response = await fetch(`/${title}`,{
method:'GET',
headers:{
  'content-Type':'application/json',
},
});
if (response.ok) {
//const data=response.json();
//console.log(data,"Result");
console.log( response );
} else {
  alert('Failed to get recipes');
}

}

const submitButton = document.querySelector('#search-submit-button')
submitButton.addEventListener('click', newFormHandler);





