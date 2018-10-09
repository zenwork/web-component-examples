/**
 * Logging interface that provides convenience for interacting with the web component
 * @type {{log : viz.showDebugMessage}}
 */
const viz = {

    log:function showDebugMessage(ctx, prefix, msg) {
        let element = document.getElementsByTagName('visual-console')[0];
        let logMsg = `[${ctx}][${prefix.toUpperCase()}] - ${msg}`;
        if (element) {
            let event = new CustomEvent('wc-debug-event', {detail:logMsg});
            element.dispatchEvent(event);
        } else {
            console.log(`visual logger not connected yet: [${logMsg}]`);
        }
    }
};

/**
 * register the component
 */
customElements.define('visual-console',
                      class extends HTMLElement {
                          constructor() {
                              super();
                              this.div = document.createElement('div');
                              this.div.id = 'visual-console';
                              this.div.style['all'] = 'initial';
                              this.div.innerHTML = `
                                        <div>
                                        <link rel="stylesheet" href="../wc-tester/debug.css"/>
                                        <h3>Visual Console</h3>
                                        <ol class="debug"></ol>
                                        </div>`;
                              const shadowRoot = this.attachShadow({mode:'open'});
                              shadowRoot.appendChild(this.div);

                              viz.log('visual-console', 'lifecycle', 'constructed');



                          }

                          connectedCallback() {
                              const d = this.div;

                              document
                                  .getElementsByTagName('visual-console')[0]
                                  .addEventListener('wc-debug-event',
                                                    function (event) {
                                                        // console.log('event
                                                        // handled');
                                                        let p = document.createElement(
                                                            'li');
                                                        p.innerHTML
                                                            = event.detail;
                                                        d.getElementsByClassName(
                                                            'debug')[0].appendChild(
                                                            p);
                                                    });
                              viz.log('visual-console', 'lifecycle', 'connected');
                          }

                      });





