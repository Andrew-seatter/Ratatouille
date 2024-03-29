const recipeId = document.querySelector('input[name="recipe-id"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                recipe_id: recipeId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
} 

if(document.querySelector('.comment-form') !=null) {  
    document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
}