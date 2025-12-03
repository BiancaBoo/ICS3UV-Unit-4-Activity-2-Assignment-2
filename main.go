// Author: Bianca Boo
// Version: 1.0.0
// Date: 2025-12-02
// Fileoverview: This program calculates the numbers of years needed for savings to reach a target with yearly interest.

package main

import "fmt"

func main() {
	// variables
	var startingAmount float64
	var interestRate float64
	var requiredAmount float64
	var currentAmount float64
	var years int
	var rate float64

	// Input bank account amount
	fmt.Print("Enter the starting bank account amount: ")
	fmt.Scanln(&startingAmount)

	// Input yearly interest rate as percentage
	fmt.Print("Enter the yearly interest rate (as a percentage): ")
	fmt.Scanln(&interestRate)

	// Input required amount for post-secondary education
	fmt.Print("Enter the amount needed for post-secondary education: ")
	fmt.Scanln(&requiredAmount)

	// Current amount and rate
	currentAmount = startingAmount
	years = 0
	rate = interestRate / 100

	// Result-controlled loop
	for currentAmount < requiredAmount {
		currentAmount += currentAmount * rate
		years++
	}

	// Output in one line
	fmt.Printf("It will take %d years for the starting bank account to reach the required amount for post-secondary education.\n", years)
	fmt.Println("Done.")
}
