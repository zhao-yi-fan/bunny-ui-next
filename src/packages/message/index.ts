import { createApp } from "vue"
import MessageComponent from "./message.vue"

let wrapper;

const Message:any = (options) => {

  // 防止 打包document is undefined
  if(!wrapper){
    wrapper = document.createElement("div")
    document.body.appendChild(wrapper)
    
    let style = {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
    }
    
    for(let key in style ){
      wrapper.style[key] = style[key];
    }
  }

  const messageBox = document.createElement('div');
  let app = createApp(MessageComponent, options);
  let boxStyle = {
    marginTop: '10px',
  }
  for(let key in boxStyle ){
    messageBox.style[key] = boxStyle[key];
  }

  app.mount(messageBox);
  wrapper.appendChild(messageBox);

  setTimeout(() => {
    app.unmount();
    wrapper.removeChild(messageBox);
  },options.duration || 5000)
};

["success", "info", "warning", "error"].forEach((type) => {
  Message[type] = function(options) {
    options.type = type
    return Message(options)
  }
  
})

export default Message
