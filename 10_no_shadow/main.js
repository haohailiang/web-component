class MyCom extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = '自定义元素'
        console.log(this);
        console.log('这里是我自定义的组件');
        const attrs = this.attributes;
        this._data = {
            title: attrs.title ? attrs.title.value : '默认的标题',
            content: attrs.content ? attrs.content.value : '默认的内容',
        }
        this.render()
    }

    render() {
        this.obj = document.createElement('div');
        this.obj.innerHTML = `
            <div class="dialog-title">${this._data.title}</div>
            <div class="dialog-content">${this._data.content}</div>
            <div class="btn cancel">知道了</div>
        `;

        this.append(this.obj);
    }
}

customElements.define('my-com', MyCom);
