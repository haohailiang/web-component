class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const templateDOM = document.getElementById('hello');

        const cloneTemplate = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            :host(.blue-theme){
                color: blue;
            }
            :host(.red-theme){
                color: red;
            }
        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
}
customElements.define('hello-world', HelloWorld)
