class MyDiv extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div style="width: 100px; height: 100px; background: green;">
                <slot></slot>
            </div>
        `
    }
}

customElements.define('my-div', MyDiv);
