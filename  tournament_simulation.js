/****
 * 
 * """
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

 */


function solution(skills) {
    // Sort the players based on skills
    const playersSort = skills.map((skill, index) => ({ index, skill }))
                             .sort((a, b) => b.skill - a.skill);

    // Create a dictionary to keep each player and their skills
    const informationOfThePlayer = playersSort.reduce((acc, player) => {
        acc[player.index] = { skills: player.skill, round: 0 };
        return acc;
    }, {});

    // Simulate the players' rounds in the tournament
    while (Object.keys(informationOfThePlayer).length > 1) {
        const newwerPlayer = {};
        for (let i = 0; i < playersSort.length; i += 2) {
            const [playerOne, playerTwo] = [playersSort[i], playersSort[i + 1]];
            // Determine the winner and loser of the game
            const [winner, loser] = playerOne.skill > playerTwo.skill ? [playerOne, playerTwo] : [playerTwo, playerOne];
            
            // Update the rounds of elimination
            informationOfThePlayer[loser.index].round += 1;
            newwerPlayer[winner.index] = informationOfThePlayer[winner.index];
        }

        // Update the playersSort
        playersSort.splice(0);
        Object.entries(newwerPlayer).forEach(([index, { skills }]) => {
            playersSort.push({ index: parseInt(index), skill: skills });
        });
        playersSort.sort((a, b) => b.skill - a.skill);
        
        // Update the informationOfThePlayer
        Object.keys(newwerPlayer).forEach(index => {
            informationOfThePlayer[index] = newwerPlayer[index];
        });
    }

    // Convert the result to a list
    const result = Object.keys(informationOfThePlayer).map(index => informationOfThePlayer[index].round);
    return result;
}


