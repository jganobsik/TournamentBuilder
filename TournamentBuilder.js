/* this is a basic tournament builder based off a VBA project
I did for a VBA class i took in college. I will be using this
project to learn versioning and become accustomed to gradually building
programs over time. 

The tournament builder takes a list of players and available teams, and randomly
assigns a team to each player. I used this program to create a Madden tournament,
where participants were randomly assigned a NFL team to use in a playoff-style
tournament bracket. */

// Version .01 - basic variables and function names created
// Version .05 - added basic structure of functions


// initialize empty arrays to house both players and teams
var players = [];
var teams = [];
var entries = [];

function addPlayer(name) {
// prompts the tournament organizer for the name of a player, and adds the input to the players array
players.push(name);
}

function addTeam(name) {
//prompts the tournament organizer for the name of a team, and adds the input to the team array
teams.push(name);
}

function assignTeams(players, teams) {
//assigns a team to each player, and returns an object with the player and team to the entries array.
//removes the team from the array
for(let i = 0; i < players.length; i++){
    let randomLottery = Math.floor(Math.random() * teams.length - 1)
    entries.push({
        "player": players[i],
        "team": teams[randomLottery],
        
    });
    teams.splice(randomLottery, 1);
}


}
