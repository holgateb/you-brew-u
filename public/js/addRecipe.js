const addButton = document.getElementById('add-ingredients');
const submitButton = document.getElementById('recipe_form');

// addButton.addEventListener('click', function(){
    //     let input = document.createElement("input");
    
    //     document.getElementById('ingredient-container').append(input)
    // })
    
    const addRecipeHandler = async (event) => {
        event.preventDefault();
        
        const recipe_name = document.getElementById("recipe_name").value;
        const method = document.getElementById("method").value;
        const beer_style = document.getElementById("beer_style").value;
        const hops = document.getElementById("hops").value;
        const ingredients = document.getElementById("ingredients").value;
        const image_url =  imgUrl;
        const user_id =  req.session.user_id;
        
    const response = await fetch("/api/recipe", {
        method: "POST",
        body: JSON.stringify({
            recipe_name,
            method,
            beer_style,
            hops,
            ingredients,
            user_id,
            image_url
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to post recipe");
    }
};

submitButton.addEventListener("submit", addRecipeHandler);
