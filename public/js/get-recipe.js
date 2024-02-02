async function newFormHandler(event) {
  event.preventDefault();

  const search = document.querySelector("#search-text").value;
  console.log(search, "Search");

  const response = await fetch(`/search/${search}`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
  });
  if (response.ok) {
    //   console.log(response);
    document.location.replace(`/search/${search}`);
  } else {
    alert("Failed to get recipes");
  }
}

const submitButton = document.querySelector("#submit-search-button");
submitButton.addEventListener("click", newFormHandler);
