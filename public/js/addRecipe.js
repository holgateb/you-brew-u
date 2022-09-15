const addButton = document.getElementById('add-ingredients')





addButton.addEventListener('click', function(){
    let inp = document.createElement("input");

    document.getElementById('ingredient-container').append(inp)
})