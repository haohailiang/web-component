class HelloWorld extends HTMLElement {
    constructor() {
        console.log('1. HelloWorld 被构造');
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

    static get observedAttributes() {
        return ['message'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'message') {
            console.log('2.' + name + " 被更新 " + newVal);
            const msg = this.shadowRoot.getElementById('message');
            msg.innerHTML = newVal;
        }
    }

    connectedCallback() {
        console.log("3. 自定义元素添加至页面。");
    }
    disconnectedCallback() {
        console.log("4. 自定义元素从页面中移除。");
    }
    adoptedCallback() {
        console.log("5. 自定义元素移动至新页面。");
    }
}

customElements.define('hello-world', HelloWorld)
