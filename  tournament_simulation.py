"""
 Task 1 of the Moringa Codility test
  
    The task is to simulate a tournament
    The tournament is a knockout tournament
    The tournament is represented as a list of integers
    The list of integers represents the skills of the players
    The skills of the players are represented as integers
    The skills of the players are unique
    The skills of the players are distinct
    The skills of the players are positive
    The skills of the players are less than or equal to 10^9

"""

def solution(skills):
    #Lets try to sort the players based on skills
    players_sort= sorted(enumerate(skills), key=lambda x: x[1], reverse=True)
    
    
    
    #How about i try creating a dictonary that will keep each player and their skills
    information_of_the_player= {player[0]: {"skills": player[1], "round" : 0} for player in players_sort}
 
     #We can try to simulate the players ground in the tourbament
     #This will calll for a while loop bby us checking the length
    while len(information_of_the_player) > 1:
         newwer_player = {}
         for i in range(0, len(players_sort), 2):
                player_one, player_two = players_sort[i], players_sort[i+1]
                #Getting to see the winner loser side of the game
                winner, loser = max(player_one, player_two, key=lambda x: x[1])
                
                #We can update the rounds of elimination
                information_of_the_player[loser[0]]["round"] += 1
                newwer_player[winner[0]] = information_of_the_player[winner[0]]
                
            #We can update the players_sort
         players_sort = sorted(newwer_player.items(), key=lambda x: x[1]["skills"], reverse=True)    
         information_of_the_player = newwer_player
            
        
        #We need to convert the result to a list
    result = [information_of_the_player[player][1]["round"] for player in range(len(skills))]
    return result
    



     