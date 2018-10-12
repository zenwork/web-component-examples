import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `rps-lit`
 * LitElement implementation Rock, Paper, Scissors
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RpsLit extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'rps-lit',
      },
    };
  }
}

window.customElements.define('rps-lit', RpsLit);
