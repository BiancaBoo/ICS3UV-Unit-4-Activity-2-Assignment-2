/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-12-03
 * @fileoverview This program calculates the numbers of years needed for savings to reach a target with yearly interest.
 */

// variables
let startingAmountString: string = "";
let interestRateString: string = "";
let requiredAmountString: string = "";

let startingAmount: number = 0;
let interestRate: number = 0;
let requiredAmount: number = 0;

let currentAmount: number = 0;
let years: number = 0;
let rate: number = 0;

// Input bank account amount
startingAmountString = prompt("Enter the starting bank account amount:") || "0";
startingAmount = parseFloat(startingAmountString);

// Input yearly interest rate as percentage
interestRateString = prompt("Enter the yearly interest rate (as a percentage):") || "0";
interestRate = parseFloat(interestRateString);

// Input required amount for post-secondary education
requiredAmountString = prompt("Enter the amount needed for post-secondary education:") || "0";
requiredAmount = parseFloat(requiredAmountString);

// Current amount and rate
currentAmount = startingAmount;
years = 0;
rate = interestRate / 100;

// Result-controlled while loop
while (currentAmount < requiredAmount) {
  currentAmount += currentAmount * rate;
  years++;
}

// Output
console.log("It will take " + years + " years for the starting bank account to reach the required amount for post-secondary education.");
console.log("Done.");