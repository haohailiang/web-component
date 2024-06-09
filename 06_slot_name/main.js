class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const templateDOM = document.getElementById('hello');

        const cloneTemplate = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            .hello{
                color:red;
                font-size:32px;
            }
        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
}
customElements.define('hello-world', HelloWorld)
