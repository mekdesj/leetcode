/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = (x / 10) | 0; // Truncate toward zero

        // Check for 32-bit overflow
        if (
            reversed > 214748364 ||
            (reversed === 214748364 && digit > 7)
        ) {
            return 0;
        }

        // Check for 32-bit underflow
        if (
            reversed < -214748364 ||
            (reversed === -214748364 && digit < -8)
        ) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return reversed;
};