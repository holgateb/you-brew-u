const addButton = document.getElementById('add-ingredients')

addButton.addEventListener('click', function(){
    let input = document.createElement("input");

    document.getElementById('ingredient-container').append(input)
})