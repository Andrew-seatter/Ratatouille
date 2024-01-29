async function newFormHandler(event){
  event.preventDefault();

  const search = document.querySelector('#search-text').value;
console.log(search, "Search");


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

const submitButton = document.querySelector('#submit-search-button')
submitButton.addEventListener('click', newFormHandler);





