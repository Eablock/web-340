/**
 * Author: Elliot Block
 * Date: 3/20/25
 * File Name: index.js
 * Description:
*/

//Import
const recipes = require("./recipes");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Choose 1 for Recipe, 2 for Timer, 3 to Quit:", (choice) => {
  if (choice ==="1"){
    rl.question("Ingredients (comma-separated): ", (input) =>{
      console.log(recipes.createRecipe(input.split(",")));
      r1.close();
    });
  } else if (choice === "2"){
    rl.question("Timer minutes: ", (input) => {
      console.log(recipes.setTimer(parseInt(input)));
      r1.close();
    });
  } else if (choice === "3"){
    console.log(recipes.quit());
    rl.close();
  } else {
    console.log("Invalid choice!");
    rl.close();
  }
});