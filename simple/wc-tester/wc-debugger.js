const viz = {

    log:function showDebugMessage(ctx, prefix, msg) {
        let log = `[${ctx}][${prefix.toUpperCase()}] -${msg}`;
        console.log('triggering');
        let event = new CustomEvent('wc-debug-event', {detail:log});
        window.dispatchEvent(event);
    }
};

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

                              const d = this.div;
                              window.addEventListener('wc-debug-event',
                                                      function (event) {
                                                          console.log('event handled');
                                                          let p = document.createElement('li');
                                                          p.innerHTML = event.detail;
                                                          d.getElementsByClassName('debug')[0].appendChild(p);
                                                      });
                              viz.log('visual-console', 'lifecycle', 'constructing');

                          }

                          connectedCallback() {
                              viz.log('visual-console', 'lifecycle', 'connected');
                          }

                      });





