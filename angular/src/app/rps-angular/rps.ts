
/**
 * game logic
 */
export const logic = {

    createGame:createGame,
    updateName:updateName,
    wireUp:wireUp
};

export const styles=`div,section {
                    font-family: sans-serif;
                }
                section {
                    border: gray solid 1px;
                    border-radius: 15px;
                }
                .game {
                    border: black solid 2px;
                    margin: 2px;
                    border-radius: 15px;
                    position: relative;
                    padding: 10px;
                  }
                .player-1, .player-2 {
                    float:left;
                    width:48%;
                    box-sizing: border-box;
                    padding: 5px;
                    margin: 5px;
                    height: 250px;
                }
                .score {
                    clear: both;
                    width: 96%;                                            
                    background: lightgray;
                    padding: 5px;
                    margin: 5px; 
                    text-align: center;
                   
                }
                .wins {
                   color: green;
                }
                .losses {
                    color: red;
                }
                .results {
                    font-size: larger;
                    font-weight: bold;
                    
                }`;

export const template = ` <div class="game">
                
                            <div>
                  <section class="player-1">
                    <h2 class="name">name</h2>
                    <div class="options">
                        <h3>Options</h3>
                        <button class="rock">Rock</button>
                        <button class="paper">Paper</button>
                        <button class="scissor">Scissor</button>
                    </div>
                    <div class="selection">
                        <h3>Selection</h3>
                       <span class="selected-label">nothing selected</span>
                    </div>
                  </section>
                  <section class="player-2">
                    <h2 class="name">no name</h2>
                    <div class="options">
                        <h3>Options</h3>
                        <span>Computer will reveal choice after you select</span>
                    </div>
                    <div class="selection">
                       <h3>Selection</h3>
                       <span class="selected-label">nothing selected</span>
                    </div>
                  </section>
              </div>
                            <section class="score">
                 <h2>Score</h2>
                 <div class="results">
                    <span class="wins">0</span> wins, <span class="ties">0</span> ties, <span class="losses">0</span> losses out of <span class="out-of">0</span>
                </div>
              </section>
</div>`;


function createGame() {
    return {
        player1:{name:'you', choice:'none'},
        player2:{name:'computer', choice:'none'},
        score:{wins:0, losses:0, ties:0, outOf:0},
        choices:{rock:'rock', paper:'paper', scissor:'scissor'}
    };
}

function updateName(newValue, game, root) {
    try {

        game.player1.name = newValue;
        root.getElementsByClassName('player-1')[0]
            .getElementsByClassName('name')[0]
            .innerHTML = newValue;
    } catch (e) {
        console.log('rps-xtag',
                    'error',
                    `problem with params: value=${!!newValue}; game=${!!game}; root=${!!root}`);
        throw e;
    }
}

function wireUp(root, game) {
    let player1 = getElement(root, 'player-1');
    let name = getElement(player1, 'name');
    let options = getElement(player1, 'options');
    let selection = getElement(player1, 'selection');
    let choice1 = getElement(selection, 'selected-label');

    let player2 = getElement(root, 'player-2');
    let name2 = getElement(player2, 'name');
    let selection2 = getElement(player2, 'selection');
    let choice2 = getElement(selection2, 'selected-label');

    let score = getElement(root, 'score');
    let wins = getElement(score, 'wins');
    let ties = getElement(score, 'ties');
    let losses = getElement(score, 'losses');
    let outOf = getElement(score, 'out-of');

    addListeners(game, options, updateScreen);

    updateScreen();

    function updateScreen() {
        name.innerHTML = game.player1.name;
        name2.innerHTML = game.player2.name;
        wins.innerHTML = game.score.wins;
        losses.innerHTML = game.score.losses;
        ties.innerHTML = game.score.ties;
        outOf.innerHTML = game.score.outOf;
        choice1.innerHTML = game.player1.choice;
        choice2.innerHTML = game.player2.choice;
    }
}

function getElement(root, classNames) {
    return root.getElementsByClassName(classNames)[0];

}

function addListeners(game, options, updateScreen) {
    let rock = getElement(options, 'rock');
    rock.addEventListener('click', factory(game.choices.rock));

    let paper = getElement(options, 'paper');
    paper.addEventListener('click', factory(game.choices.paper));

    let scissor = getElement(options, 'scissor');
    scissor.addEventListener('click', factory(game.choices.scissor));

    function factory(choice) {
        return function assignChoice() {
            game.player1.choice = choice;
            executeComputerChoice(game);
            scoreGame(game);
            updateScreen();
        };
    }
}

function scoreGame(game) {
    game.score.outOf += 1;

    let choice1 = game.player1.choice;
    let choice2 = game.player2.choice;

    if (choice1 === choice2) {
        game.score.ties += 1;
    } else {
        let rock = game.choices.rock;
        let paper = game.choices.paper;
        let scissor = game.choices.scissor;
        if (choice1 === rock && choice2 === paper) {
            game.score.losses += 1;
        }

        if (choice1 === rock && choice2 === scissor) {
            game.score.wins += 1;
        }

        if (choice1 === paper && choice2 === rock) {
            game.score.wins += 1;
        }

        if (choice1 === paper && choice2 === scissor) {
            game.score.losses += 1;
        }

        if (choice1 === scissor && choice2 === rock) {
            game.score.losses += 1;
        }

        if (choice1 === scissor && choice2 === paper) {
            game.score.wins += 1;
        }
    }

}

function executeComputerChoice(game) {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            game.player2.choice = game.choices.rock;
            break;
        case 2:
            game.player2.choice = game.choices.paper;
            break;
        default:
            game.player2.choice = game.choices.scissor;
            break;

    }

}

