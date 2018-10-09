(function () {

    customElements.define('rps-simple',
                          class extends HTMLElement {

                              constructor() {
                                  super();
                                  console.log('constructing');

                                  this.game = createGame();
                                  this.root = createRootElement(this.game);

                                  const shadowRoot = this.attachShadow({mode:'closed'});
                                  shadowRoot.appendChild(this.root);

                              }

                              static get observedAttributes() { return ['player-1']; }

                              attributeChangedCallback(name, oldValue, newValue) {
                                  console.log('handling attribute change');
                                  if (oldValue !== newValue) {
                                      switch (name) {
                                          case 'player-1':
                                              updateName(newValue, this.game, this.root);
                                              break;
                                          default:

                                      }
                                  }
                              }

                              connectedCallback() {
                                  console.log('wiring element');
                                  wireUp(this.root, this.game);
                              }

                          });

    function updateName(newValue, game, root) {
        game.player1.name = newValue;
        root.getElementsByClassName('player-1')[0]
            .getElementsByClassName('name')[0]
            .innerHTML = newValue;
    }

    function wireUp(root, game) {
        let player1 = getElement(root, 'player-1');
        let name = getElement(player1, 'name');
        let options = getElement(player1, 'options');
        let selection = getElement(player1, 'selection');
        let choice1 = getElement(selection, 'selected-label');

        let player2 = getElement(root, 'player-2');
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
            wins.innerHTML = game.score.wins;
            losses.innerHTML = game.score.losses;
            ties.innerHTML = game.score.ties;
            outOf.innerHTML = game.score.outOf;
            choice1.innerHTML = game.player1.choice;
            choice2.innerHTML = game.player2.choice;
        }
    }

    function createGame() {
        return {
            player1:{name:'you', choice:'none'},
            player2:{name:'computer', choice:'none'},
            score:{wins:0, losses:0, ties:0, outOf:0},
            choices:{rock:'rock', paper:'paper', scissor:'scissor'}
        };
    }

    function createRootElement(game) {
        let root = document.createElement('div');

        root.innerHTML = `
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
                                        <h2 class="name">${game.player2.name}</h2>
                                        <div class="options">
                                            <h3>Options</h3>
                                            <span>Computer will reveal choice after you select</span>
                                        </div>
                                        <div class="selection">
                                           <h3>Selection</h3>
                                           <span class="selected-label">nothing selected</span>
                                        </div>
                                      </section>
                                      <section class="score">
                                         <h2>Score</h2>
                                        <span class="wins">0</span> wins, <span class="ties">0</span> ties, <span class="losses">0</span> losses out of <span class="out-of">0</span>
                                      </section>
                                      `;
        return root;
    }

    let getElement = function (root, classNames) {
        return root.getElementsByClassName(classNames)[0];
    };

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
})();
