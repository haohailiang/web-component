import PopEvent from './popEvent.js'

let template = document.createElement('template');
document.body.appendChild(template);
template.innerHTML = `
    <div class="dialog-title">写死的标题</div>
    <div class="dialog-content">写死的内容</div>
    <div class="btn cancel" data-hide="true" data-cancel="123">知道了</div>
`;

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
        this.append(template.content.cloneNode(true));
    }

    bindEvent() {
        this.event = new PopEvent({
            obj: this
        })
    }

    hide(params) {
        console.log(params)
        console.log('点击了hide')
        // this.obj.style.display = 'none'
    }

    cancel() {
        console.log('点击了cancel')
        // this.obj.style.display = 'none'
    }
}

customElements.define('my-com', MyCom);
