class MyComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<h2>这是我的自定义组件</h2>';
    }
}

customElements.define('my-component', MyComponent);
