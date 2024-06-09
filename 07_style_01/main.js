class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const templateDOM = document.getElementById('hello');

        const cloneTemplate = templateDOM.content.cloneNode(true);
        const style = document.createElement('style');
        style.innerHTML = `
            :host{
                display:flex;
                flex-direction:column; 
                width:150px;
                color:var(--text-color,red);
                font-size:var(--text-size, 18px);
            }

        `
        shadow.appendChild(style);
        shadow.appendChild(cloneTemplate);
    }
}
customElements.define('hello-world', HelloWorld)
