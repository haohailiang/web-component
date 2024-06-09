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
        this.compileNode(this.obj)
        this.observe(this._data);

        setTimeout(() => {
            this._data.title = '这里是修改的标题'
        }, 2000)
    }

    render() {
        this.obj = document.createElement('div');
        this.obj.innerHTML = `
            <div class="dialog-title">{{title}}</div>
            <div class="dialog-content">{{content}}</div>
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
        // this.obj.style.display = 'none'
    }

    cancel() {
        console.log('点击了cancel')
        // this.obj.style.display = 'none'
    }

    observe(data) {
        let _this = this;
        this._data = new Proxy(data, {
            set(obj, prop, value) {
                let event = new CustomEvent(prop, {
                    detail: value
                })
                _this.dispatchEvent(event);
                return Reflect.set(...arguments)
            }
        })
    }

    // 根据当前元素的结构，将我们的数据编译进去
    compileNode(el) {
        let child = el.childNodes; // 找到元素下的所有节点
        child.forEach(node => {
            if (node.nodeType == 1) { // 如果该节点是元素节点
                let attrs = node.attributes;
                [...attrs].forEach(attr => {
                    let attrName = attr.name;
                    if (attrName.indexOf("v-") == 0) {
                        let attrVal = attr.value;
                        //console.log(attrName,attrVal);
                        if (attrName === "v-html") { // 这是一个v-html指令，我们应该用数据替换该元素的内容
                            node.innerHTML = this.$option.data[attrVal];
                            node.addEventListener(attrVal, () => {
                                node.innerHTML = this.$option.data[attrVal];
                            });
                        } else if (attrName == "v-model") { // 这是一个双向绑定指令
                            node.value = this.$option.data[attrVal];
                            this.addEventListener(attrVal, (e) => {
                                console.log(e);
                                node.value = this.$option.data[attrVal];
                            });
                            // 监听视图发生了变化，同步修改我们的数据
                            node.addEventListener("input", ({ target }) => {
                                this.$option.data[attrVal] = target.value;
                            });
                        }
                    }
                });

                if (node.childNodes.length > 0) { // 如果该元素还有子元素继续想要查找  
                    this.compileNode(node);
                }
            } else if (node.nodeType == 3) { // 如果该节点是文本节点
                // console.log(node);
                //console.dir(node);
                let startContent = node.textContent;
                let reg = /\{\{\s*(\S+)\s*\}\}/g;
                //console.log(reg.test(startContent),startContent);
                if (reg.test(startContent)) {
                    node.textContent = startContent.replace(reg, (...arg) => {
                        this.addEventListener(arg[1], () => {
                            node.textContent = startContent.replace(reg, (...arg) => {
                                return this._data[arg[1]];
                            });
                        });
                        return this._data[arg[1]];
                    });
                }
            }
        });
    }
}

customElements.define('my-com', MyCom);
