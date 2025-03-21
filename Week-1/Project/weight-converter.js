/**
 * Author:
 * Date: 3/20.25
 * File Name: Elliot Block
 * Description: Weight Conversion
*/

"use strict";

// TODO: Implement the weight conversion logic here

if (process.argv.length!=3){
  console.error("Usage: node weight-converter.js <pounds>"); //display error message
  process.exit(1);//exit with a non-zero error code
}

const pounds = process.argv[2];//get the weight, pounds, front command line

if (isNaN(pounds)){
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = parseFloat(pounds) * 0.453592;

console.log(kilograms.toFixed(2));