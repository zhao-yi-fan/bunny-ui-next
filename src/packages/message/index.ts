import { createApp } from "vue"
import MessageComponent from "./message.vue"

/* const instances: any = []
// 获取当前组件的实例
 let getInstance = () => {
  // MessageComponent这个vue文件会被加载成一个对象
  let vm = createVNode(MessageComponent)
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
      // MessageComponent.add(options)
    },
  }
} */

const wrapper = document.createElement("div")
document.body.appendChild(wrapper)

const Message:any = (options) => {
  const messageBox = document.createElement('div');
  let app = createApp(MessageComponent, options)

  app.mount(messageBox);
  wrapper.appendChild(messageBox);
};

["success", "info", "warning", "error"].forEach((type) => {
  Message[type] = function(options) {
    options.type = type
    return Message(options)
  }
  
})

export default Message
