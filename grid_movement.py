"""
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

def solution(S):
    N = len(S)
    
    the_positions = [0] * N
    
    for i in range(N):
        moveMade = S[i]
        current_position = the_positions[i]
        
        
        #Am currently thinking of handling my wrap-around for the left move
        
        if moveMade == "<":
            newerPosition = (current_position - 1) % (N * N)   
            
        #Am currently thinking of handling my wrap-around for the right move 
            
        elif moveMade == ">":
            newerPosition = (current_position + 1) % (N * N)
                            
        elif moveMade == "^":
            newerPosition = current_position - N
            
        elif moveMade == "v":
            newerPosition = current_position + N
            
        #UPdate the position with vlidity
        if 0 <= newerPosition < N * N and newerPosition not in the_positions:
            the_positions[i] = newerPosition
            
    #Counting all the moves plus the invalid ones
    counting_all_theMoves = len(the_positions)
        
    return counting_all_theMoves

#To be certain that the solution is correct
# I will test the solution
# The test case will be the example given in the question
# The example is S = ">>v"
# The expected output is 3
# I will also test the solution with other test cases
# The test case will be S = ">>>v"
# The expected output is 4

# Test case
S = ">>>v"
print(solution(S))

# Test case
S = ">>v"
print(solution(S))
    
    