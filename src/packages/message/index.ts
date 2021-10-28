import { createVNode, render } from "vue"
import Message from "./message.vue"

const instances: any = []
// 获取当前组件的实例
let getInstance = () => {
  // MessageComponent这个vue文件会被加载成一个对象
  let vm = createVNode(Message)
  console.log(vm, "vm=========")

  const container = document.createElement("div")
  container.className = `container_`
  render(vm, container)
  // .$mount('#app') 写了就会挂载到页面，没写就会放到$el中

  instances.push({ vm })
  console.dir(container);
  
  document.body.appendChild(container.firstChild!)
  // document.body.appendChild(container.firstElementChild!)
  return {
    add(options) {
      // Message.add(options)
    },
  }
}
// 单例模式
let instance
const getInst = () => {
  // 返回唯一的实例
  instance = instance || getInstance()
  return instance
}
const MessageMap = {
  info(options) {
    getInst().add(options)
  },
  warn() {},
  success() {},
  error() {},
}

export default {
  // 写插件的原理
  install(app: any, options) {
    // options 选项代表的是 use的第二个参数
    // console.log(app, options)
    let $message = {}
    Object.keys(MessageMap).forEach((type) => {
      $message[type] = MessageMap[type]
    })
    // app.config.globalProperties.$message = $message;
    app.provide("$message", $message)
    app.mixin({
      beforeCreated() {
        // 在所有的组件中都增加了这个方法
        if (this.$options.info) {
          console.log("根")
        } else {
          console.log("不是根")
        }
      },
    })
  },
}
