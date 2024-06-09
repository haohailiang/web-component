import PopEvent from './popEvent.js'

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
        this.bindEvent()
    }

    render() {
        this.obj = document.createElement('div');
        this.obj.innerHTML = `
            <div class="dialog-title">${this._data.title}</div>
            <div class="dialog-content">${this._data.content}</div>
            <div class="btn cancel" data-hide="true" data-cancel="123">知道了</div>
        `;

        this.append(this.obj);
    }

    bindEvent() {
        this.event = new PopEvent({
            obj: this
        })
    }

    hide(params) {
        console.log(params)
        console.log('点击了hide')
        this.obj.style.display = 'none'
    }

    cancel() {
        console.log('点击了cancel')
        this.obj.style.display = 'none'
    }
}

customElements.define('my-com', MyCom);
