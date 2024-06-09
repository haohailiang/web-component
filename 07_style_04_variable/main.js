class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const templateDOM = document.getElementById('hello');

        const cloneTemplate = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            span {
                color: var(--text-color, #000000);
            }
            button {
                color: var(--text-color, #000000);
            }
        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
}
customElements.define('hello-world', HelloWorld)
