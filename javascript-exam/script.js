
const addrecord = () => {
    return JSON.parse(localStorage.getItem('addRecipedata')) || [];
}
const addrecipe = () => {
    let title = document.getElementById('title').value;
    let cuisine = document.getElementById('cuisine').value;
    let ingredients = document.getElementById('ingredients').value;
    let instructions = document.getElementById('instructions').value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        title: title,
        cuisine: cuisine,
        ingredients: ingredients,
        instructions: instructions
    }
    let old = [...addrecord(), row];
    localStorage.setItem('addRecipedata', JSON.stringify(old));
    alert("add recipe successfully..");
    document.getElementById('title').value = " ";
    document.getElementById('cuisine').value = " ";
    document.getElementById('ingredients').value = " ";
    document.getElementById('instructions').value = " ";
    viewRecord();

}

const viewRecord = () => {

    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";

    let data = addrecord();
    let tbl = " ";
    data.map((val, index) => {
        tbl += `
     <div class="col-md-4 mb-4">
        <div class="card recipe-card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title">${val.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${val.cuisine}</h6>
          <p><strong>Ingredients:</strong> ${val.ingredients}</p>
          <p><strong>Instructions:</strong> ${val.instructions}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-warning btn-sm" onclick="editRecipe(${val.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteRecipe(${val.id})">Delete</button>
          </div>
        </div>
      </div> 
       </div>
        
        `
        document.getElementById('recipeList').innerHTML = tbl;


    })

}
viewRecord();

const deleteRecipe = (id) => {
    let data = addrecord();

    let del = data.filter((val) => {
        if (val.id != id) {
            return val;
        }

    })
    localStorage.setItem('addRecipedata', JSON.stringify(del));
    alert("Delete record.");
    viewRecord();
}

const editRecipe = (id) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";

    let data = addrecord();

    let up = data.find((val) => {
        if (val.id == id) {
            return val;
        }
    })

    document.getElementById('title').value = up.title;
    document.getElementById('cuisine').value = up.cuisine;
    document.getElementById('ingredients').value = up.ingredients;
    document.getElementById('instructions').value = up.instructions;
    document.getElementById('editid').value = up.id;
}

const Updaterecipe = () => {
    let title = document.getElementById('title').value;
    let cuisine = document.getElementById('cuisine').value;
    let ingredients = document.getElementById('ingredients').value;
    let instructions = document.getElementById('instructions').value;
    let id = document.getElementById('editid').value;
    let data = addrecord();

    let update = data.map((val) => {
        if (val.id == id) {
            val.title = title;
            val.cuisine = cuisine;
            val.ingredients = ingredients;
            val.instructions = instructions;
        }
        return val;
    })
    localStorage.setItem('addRecipedata', JSON.stringify(update));
    alert("Edit suceefully ..");
    document.getElementById('title').value = " ";
    document.getElementById('cuisine').value = " ";
    document.getElementById('ingredients').value = " ";
    document.getElementById('instructions').value = " ";

    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";
    viewRecord();

}




const filterRecipes = () => {
    let titleFilter = document.getElementById("searchTitle").value;
    let ingredientFilter = document.getElementById("searchIngredients").value;
    let cuisineFilter = document.getElementById("filterCuisine").value;

    let data = addrecord();

    let filtered = data.filter((val) => {
        return (
            val.title.toLowerCase().includes(titleFilter) &&
            val.ingredients.toLowerCase().includes(ingredientFilter) &&
            val.cuisine.toLowerCase().includes(cuisineFilter)
        );
    });

    let tbl = "";
    filtered.map((val) => {
        tbl += `
        <div class="col-md-4 mb-4">
            <div class="card recipe-card h-100 shadow">
                <div class="card-body">
                    <h5 class="card-title">${val.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${val.cuisine}</h6>
                    <p><strong>Ingredients:</strong> ${val.ingredients}</p>
                    <p><strong>Instructions:</strong> ${val.instructions}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-warning btn-sm" onclick="editRecipe(${val.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteRecipe(${val.id})">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    document.getElementById("recipeList").innerHTML = tbl;
};


document.getElementById("searchTitle").addEventListener("input", filterRecipes);
document.getElementById("searchIngredients").addEventListener("input", filterRecipes);
document.getElementById("filterCuisine").addEventListener("input", filterRecipes);


