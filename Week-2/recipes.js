/**
 * Author: Elliot Block
 * Date: 3/29/25
 * File Name: recipes
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  if (!Array.isArray(ingredients) || ingredients.length === 0){
    throw new Error("Invalid ingredients list");
  }
return `Recipe created with ingredients: ${ingredients.join(",")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  if (typeof minutes !== "number" || minutes <= 0){
    throw new Error("Invalid time value");
  }
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

// TODO: Export the functions