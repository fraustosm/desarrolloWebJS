// Assignment operators

// The = Operator
// The assignment operator (=) is used to assign a value to a variable.
let x = 10; // Assigns the value 10 to the variable x

// The += Operator
// The addition assignment operator (+=) adds the right operand to the left operand and assigns the result to the left operand.
x += 5; // Equivalent to x = x + 5; Now x is 15

// The -= Operator
// The subtraction assignment operator (-=) subtracts the right operand from the left operand and assigns the result to the left operand.
x -= 3; // Equivalent to x = x - 3; Now x is 12

// The *= Operator
// The multiplication assignment operator (*=) multiplies the left operand by the right operand and assigns the result to the left operand.
x *= 2; // Equivalent to x = x * 2; Now x is 24

// The /= Operator
// The division assignment operator (/=) divides the left operand by the right operand and assigns the result to the left operand.
x /= 4; // Equivalent to x = x / 4; Now x is 6

// The %= Operator
// The modulus assignment operator (%=) divides the left operand by the right operand and assigns the remainder to the left operand.
x %= 5; // Equivalent to x = x % 5; Now x is 1

// The **= Operator
// The exponentiation assignment operator (**=) raises the left operand to the power of the right operand and assigns the result to the left operand.
x **= 3; // Equivalent to x = x ** 3; Now x is 1 (1 raised to any power is still 1)

// Output the final value of x
console.log("Final value of x:", x); // Outputs: Final value of x: 1
// The <<= Operator
// The left shift assignment operator (<<=) shifts the bits of the left operand to the left by the number of positions specified by the right operand and assigns the result to the left operand.
// x <<= 2; // Equivalent to x = x << 2; (not used in this example)
// The >>= Operator
// The right shift assignment operator (>>=) shifts the bits of the left operand to the right by the number of positions specified by the right operand and assigns the result to the left operand.
// x >>= 2; // Equivalent to x = x >> 2; (not used in this example)
// The >>>= Operator
// The unsigned right shift assignment operator (>>>=) shifts the bits of the left operand to the right by the number of positions specified by the right operand, filling in zeros from the left, and assigns the result to the left operand.
// x >>>= 2; // Equivalent to x = x >>> 2; (not used in this example)
// The &= Operator
// The bitwise AND assignment operator (&=) performs a bitwise AND operation between the left operand and the right operand and assigns the result to the left operand.
// x &= 3; // Equivalent to x = x & 3; (not used in this example)
// The |= Operator
// The bitwise OR assignment operator (|=) performs a bitwise OR operation between the left operand and the right operand and assigns the result to the left operand.
// x |= 3; // Equivalent to x = x | 3; (not used in this example)
// The ^= Operator
// The bitwise XOR assignment operator (^=) performs a bitwise XOR operation between the left operand and the right operand and assigns the result to the left operand.
// x ^= 3; // Equivalent to x = x ^ 3; (not used in this example)
// The ??= Operator
// The nullish coalescing assignment operator (??=) assigns the right operand to the left operand only if the left operand is null or undefined.
// x ??= 5; // Equivalent to x = x ?? 5; (not used in this example)
// The ||= Operator
// The logical OR assignment operator (||=) assigns the right operand to the left operand only if the left operand is falsy (false, 0, "", null, undefined, or NaN).
// x ||= 5; // Equivalent to x = x || 5; (not used in this example)
// The &&= Operator
// The logical AND assignment operator (&&=) assigns the right operand to the left operand only if the left operand is truthy (true, non-zero number, non-empty string, object, etc.).
// x &&= 5; // Equivalent to x = x && 5; (not used in this example)
// Output the final value of x after all operations
console.log("Final value of x after all operations:", x); // Outputs: Final value of x after all operations: 1
// Note: The <<=, >>=, >>>=, &=, |=, ^=, ??=, ||=, and &&= operators are not used in this example,
// but they can be used similarly to the other assignment operators for bitwise and logical operations.