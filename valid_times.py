# THe task 2 of the MOringa Cdility test the  valid times
# The task is to find the number of valid times that can be formed from the given digits
# The time is valid if it is in the format HH:MM and HH is in the range 00-23 and MM is in the range 00-59
# The function should return the number of valid times that can be formed from the given digits
# The function should take four arguments A, B, C, D which are the digits to form the time

from itertools import permutations

def solution(A, B, C, D):
    digits = [A, B, C, D]
    valid_perm_times= set()
    
    def is_the_validperm_time(h, m):
        return 0<= h <= 23 and 0<= m <= 59
    
    for permu in permutations(digits):
        h1, h2, m1, m2 = permu
        hour = h1 * 10 + m2
        minute = m1 * 10 + m2
        
        if is_the_validperm_time(hour, minute):
            valid_perm_times.add((hour, minute))
            
    return len(valid_perm_times)

# # Test case 
# A, B, C, D = 2, 3, 3, 2
# print(solution(A, B, C, D)) 
