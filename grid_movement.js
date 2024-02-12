/****
 * 
 * """
   Task 3 of the Moringa Cdility test
    The task is to find the number of moves that can be made in a grid
    The grid is a 2D grid of size N * N
    The grid is represented as a string S
    The string S contains the moves that can be made in the grid
    The moves are represented as characters in the string S
    The moves are represented as follows:
    > represents a move to the right
    < represents a move to the left
    ^ represents a move upwards
    v represents a move downwards
    The function should return the number of moves that can be made in the grid
    The function should take one argument S which is a string that represents the moves in the grid
    The function should return an integer
    The function should return the number of moves that can be made in the grid
    The function should return -1 if the number of moves that can be made in the grid is greater than 1000
    The function should return -1 if the number of moves that can be made in the grid is less than 1
    The function should return -1 if the number of moves that can be made in the grid is not valid

"""
 */

function solution(S) {

    const N = S.length;
    const thePositions = new Array(N).fill(0)


    for (let i = 0; i < N; i++){
        const moveMade = S[i];
        const  currentPostion = thePositions[i];

        let newerPostion;

        //Am currently thinking of handling my wrap-around for the left move
        if (moveMade === "<"){
            newerPostion = (currentPostion - 1 + N * N) % (N * N);
        } 
        
        //Am currently thinking of handling my wrap-around for the right move
        else if (moveMade === ">"){
            newerPostion = (currentPostion + 1 ) % (N * N)
        } else if (moveMade === "^"){
            newerPostion = currentPostion - N;
        } else if (moveMade === "v"){
            newerPostion = currentPostion + N;
        } 

        if ( 0 <= newerPostion && newerPostion < N * N && !thePositions.includes(newerPostion)){
            thePositions[i] = newerPostion;
        }
    }

    const countingAllTHeMOves = thePositions.length;

    return countingAllTHeMOves;
}

/**
 * 
 * #To be certain that the solution is correct
# I will test the solution
# The test case will be the example given in the question
# The example is S = ">>v"
# The expected output is 3
# I will also test the solution with other test cases
# The test case will be S = ">>>v"
# The expected output is 4

# Test case
 */

console.log(solution(">>v")); // 3
console.log(solution(">>>v")); // 4