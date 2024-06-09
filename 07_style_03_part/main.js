class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const templateDOM = document.getElementById('hello');

        const cloneTemplate = templateDOM.content.cloneNode(true);
        shadow.appendChild(cloneTemplate);
    }
}
customElements.define('hello-world', HelloWorld)
