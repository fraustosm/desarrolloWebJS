/* 

Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

*/
let x = 5; // Declare a variable using let
const y = 10; // Declare a constant using const
var z = 15; // Declare a variable using var


/* 

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

*/
let firstName = "John"; // Valid identifier
let _age = 30; // Valid identifier
let $salary = 50000; // Valid identifier
let 2ndName = "Doe"; // Invalid identifier (cannot start with a digit)
let total$ = 100; // Valid identifier
let class = "Math"; // Invalid identifier (reserved word)