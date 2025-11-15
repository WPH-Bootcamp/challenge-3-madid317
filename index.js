"use strict";

const prompt = require("prompt-sync")({ sigint: true });

function getValidNumberInput(promptMessage) {
  while (true) {
    let userInput = prompt(promptMessage);

    let converted = Number(userInput); 

    if (!isNaN(converted)) {
      return converted;
    }

    console.log("❌ Input tidak valid! Masukkan angka yang benar.");
  }
}


function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    let op = prompt(promptMessage);

    if (validOperators.includes(op)) {
      return op;
    }

    console.log("❌ Operator tidak valid! Gunakan: + - * / % **");
  }
}


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}


while (true) {
  console.log("\n===== Kalkulator Interaktif =====");

  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const num2 = getValidNumberInput("Masukkan angka kedua: ");
  const operator = getValidOperatorInput("Masukkan operator (+ - * / % **): ");

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

 
  console.log(`\nHasil: ${result}`);

  if (typeof result === "number") {
   
    if (result > 0) console.log("Angka positif");
    else if (result < 0) console.log("Angka negatif");
    else console.log("Angka nol");

    
    if (Number.isInteger(result)) console.log("Tipe: Integer");
    else console.log("Tipe: Float");

    
    console.log(result % 2 === 0 ? "Genap" : "Ganjil");

    
    if (result > 0 && result % 2 === 0) {
      console.log("Angka ini positif dan genap.");
    }
  } else if (typeof result === "string") {
    console.log(`⚠️ Error message: ${result}`);
  } else {
    console.log(result ?? "Result undefined atau null!");
  }

  
  const again = prompt("\nHitung lagi? (yes/no): ").toLowerCase();
  if (again === "no") {
    console.log("Program selesai. Terima kasih!");
    break;
  }
}