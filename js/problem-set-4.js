/*
 * Hello. 2 points.
 */

function hello() {

var div=document.getElementById("output1");
div.innerHTML="Hello, AP Computer Science Principles!";


  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  var div=document.getElementById("output2");
  name= prompt("What is your name?");
  div.innerHTML="Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var div=document.getElementById("output3");
  let fahr = (cels*1.8+32) .toFixed(2)
  div.innerHTML= cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var div=document.getElementById("output4");
  let cels = ((fahr-32)/1.8) .toFixed(2);
  div.innerHTML= fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  

var div=document.getElementById("output5");
miles = Math.floor(inches/63360);
inches = inches % 63360;
yards = Math.floor(inches / 36);
inches = inches % 36;
feet = Math.floor(inches / 12);
inches = inches % 12;
div.innerHTML = `Miles: ${miles}<br/>Yards: ${yards}<br/>Feet: ${feet}<br/>Inches: ${inches}`;


  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  var div=document.getElementById("output6");
  kilometers = Math.floor(centimeters/100000);
  centimeters = centimeters % 100000;
  meters = Math.floor(centimeters/100);
  centimeters = centimeters % 100;
  div.innerHTML = `Kilometers: ${kilometers}<br/>Meters: ${meters}<br/>Centimeters: ${centimeters}`;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  var div=document.getElementById("output7");
  gallons = Math.floor(fluidOunces/128);
  fluidOunces = fluidOunces % 128;
  quarts = Math.floor(fluidOunces/32);
  fluidOunces = fluidOunces % 32;
  pints = Math.floor(fluidOunces/16);
  fluidOunces = fluidOunces % 16;
  cups = Math.floor(fluidOunces/8);
  fluidOunces = fluidOunces % 8;
  div.innerHTML = `Gallons: ${gallons}<br/>Quarts: ${quarts}<br/>Pints: ${pints}<br/>Cups: ${cups}<br/>Fluid Ounces: ${fluidOunces}`;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  var div=document.getElementById("output8");
  tons = Math.floor(ounces/32000);
  ounces = ounces % 32000;
  pounds = Math.floor(ounces/16);
  ounces = ounces % 16;
  div.innerHTML = `Tons: ${tons}<br/>Pounds: ${pounds}<br/>Ounces: ${ounces}`;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  var div=document.getElementById("output9");
  dollars = Math.floor(pennies/100);
  pennies = pennies % 100;
  quarters = Math.floor(pennies/25);
  pennies = pennies % 25;
  dimes = Math.floor(pennies/10);
  pennies = pennies % 10;
  nickels = Math.floor(pennies/5);
  pennies = pennies % 5;
  div.innerHTML = `Dollars: ${dollars}<br/>Quarters: ${quarters}<br/>Dimes: ${dimes}<br/>Nickels: ${nickels}<br/>Pennies: ${pennies}`;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  var div=document.getElementById("output10");

  amount = amount*100
  quarters = Math.floor(amount/25);
  amount = amount % 25;
  dimes = Math.floor(amount/10);
  amount = amount % 10;
  nickels = Math.floor(amount/5);
  amount = amount % 5;
  pennies = Math.floor(amount/1);
  amount = amount % 1;
  let change = (quarters + dimes + nickels + pennies).toFixed(0);
  div.innerHTML = change + " coins.";

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
