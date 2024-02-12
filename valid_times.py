# THe task 2 of valid times

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

# # Test cases
# A, B, C, D = 2, 3, 3, 2
# print(solution(A, B, C, D)) # 3

# A, B, C, D = 1, 8, 3, 2
# print(solution(A, B, C, D)) # 6