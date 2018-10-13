import HyperHtmlElement from 'hyperhtml-element';
import {logic} from './rps';

class Clock extends HyperHtmlElement {

	constructor() {
		super();
		console.log('constructed');
		this.game = logic.createGame();

	}

	static get observedAttributes() { return ['name']; }

	attributeChangedCallback(name, prev, curr) {
		if (name === 'name' && this.name !== curr) {
			this.game.player1.name = curr;
		}
		
		this.render();
	}

	created() {
		console.log('created');
		const sr = this.attachShadow({mode:'closed'});
		this.html = Clock.bind(sr);
		this.render();
	}

	select(choice) {
		this.game.player1.choice = this.game.choices[choice];
		logic.executeComputerChoice(this.game);
		logic.scoreGame(this.game);
		this.render();
	}

	render() {
		return this.html`
<div class="game">
    <style>
        div, section {
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
            float: left;
            width: 48%;
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

        }</style>
    <div>
        <section class="player-1">
            <h2 class="name">${this.game.player1.name}</h2>
            <div class="options">
                <h3>Options</h3>
                <button class="rock" onclick=${() => this.select(this.game.choices.rock)}>Rock</button>
                <button class="paper" onclick=${() => this.select(this.game.choices.paper)}>Paper</button>
                <button class="scissor" onclick=${() => this.select(this.game.choices.scissor)}>Scissor</button>
            </div>
            <div class="selection">
                <h3>Selection</h3>
                <span class="selected-label">${this.game.player1.choice}</span>
            </div>
        </section>
        <section class="player-2">
            <h2 class="name">${this.game.player2.name}</h2>
            <div class="options">
                <h3>Options</h3>
                <span>Computer will reveal choice after you select</span>
            </div>
            <div class="selection">
                <h3>Selection</h3>
                <span class="selected-label">${this.game.player2.choice}</span>
            </div>
        </section>
    </div>
    <section class="score">
        <h2>Score</h2>
        <div class="results">
            <span class="wins">${this.game.score.wins}</span> wins, <span class="ties">${this.game.score.ties}</span> ties, <span
                class="losses">${this.game.score.losses}</span> losses out
                                                        of <span class="out-of">${this.game.score.outOf}</span>
        </div>
    </section>
</div>
`;
	}

}

Clock.define('rps-hyper');
