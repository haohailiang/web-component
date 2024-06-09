import { html, css, LitElement } from './lib/lit-core.min.js';

export class LitCounter extends LitElement {
    static styles = css`button { color: var(--my-color) }`;

    static properties = {
        count: { type: Number },
    };

    constructor() {
        super();
        this.count = 0;
    }

    // firstUpdated() {
    //     console.log('firstUpdated') 
    // }

    render() {
        return html`<button @click="${() => this.count++}">${this.count}</button>`;
    }
}
customElements.define('lit-counter', LitCounter);

