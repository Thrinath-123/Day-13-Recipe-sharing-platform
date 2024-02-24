document.addEventListener("DOMContentLoaded", function() {
    const recipeForm = document.getElementById("recipe-form");
    const recipeList = document.getElementById("recipe-list");

    recipeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("recipe-title").value;
        const description = document.getElementById("recipe-description").value;

        if (title.trim() === '' || description.trim() === '') {
            alert("Please fill out all fields.");
            return;
        }

        const recipe = document.createElement("div");
        recipe.classList.add("recipe");
        recipe.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <button>Edit</button>
            <button>Delete</button>
        `;

        recipeList.appendChild(recipe);
        recipeForm.reset();
    });
});
