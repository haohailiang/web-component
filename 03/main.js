class Counter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <button>${this.count}</button>
        `
        this.btn = this.shadowRoot.querySelector('button');
        this.btn.addEventListener('click', () => this.count++);
    }

    static get observedAttributes() {
        return ['count'];
    }

    get count() {
        return this.getAttribute('count') ? this.getAttribute('count') : 0;
    }

    set count(count) {
        this.setAttribute('count', count);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr === 'count') {
            this.btn.textContent = newValue;
        }
    }
}

customElements.define('my-counter', Counter);
