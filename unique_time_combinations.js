/***
 * 
 * """
   THis is the task 2 of the MOringa Cdility test the  valid times that can be formed from the given digits
"""




# The task is to find the number of valid times that can be formed from the given digits
# The time is valid if it is in the format HH:MM and HH is in the range 00-23 and MM is in the range 00-59
# The function should return the number of valid times that can be formed from the given digits
# The function should take four arguments A, B, C, D which are the digits to form the time

 */

function solution(A, B, C, D) {
    const digits = [A, B, C, D];
    const validPermTimes = new Set();

    function isValidPermTime(h, m) {
        return 0 <= h && h <= 23 && 0 <= m && m <= 59;
    }

    for (const permu of getPermutations(digits)) {
        const [h1, h2, m1, m2] = permu;
        const hour = h1 * 10 + h2;
        const minute = m1 * 10 + m2;

        if (isValidPermTime(hour, minute)) {
            validPermTimes.add(`${hour}:${minute}`);
        }
    }

    return validPermTimes.size;
}

function* getPermutations(arr) {
    if (arr.length === 1) {
        yield arr;
    } else {
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            for (const p of getPermutations(rest)) {
                yield [arr[i], ...p];
            }
        }
    }
}

/***
 * 
 * #To be certain that the solution is correct
# I will test the solution
# The test case will be the example given in the question
# The example is A, B, C, D = 1, 8, 3, 2
# The expected output is 6
# I will also test the solution with other test cases
# The test case will be A, B, C, D = 2, 3, 3, 2
# The expected output is 3
 */

// Test case
const test1 = solution(2, 3, 3, 2); // Expected output: 3
console.log(test1);

// Test case
const test2 = solution(1, 8, 3, 2); // Expected output: 6
console.log(test2);
