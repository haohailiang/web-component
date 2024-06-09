class MyImg extends HTMLImageElement {
    constructor() {
        super();
        console.log('这里拓展了img标签')
        this.src = './123.webp'
    }
}

customElements.define('my-img', MyImg, {
    extends: 'img'
})
