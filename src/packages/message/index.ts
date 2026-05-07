import { App, createApp } from 'vue'
import MessageComponent from './message.vue'
import '../../style/message.scss'

type MessageType = 'info' | 'warn' | 'success' | 'error'
type MessageOptions = {
  message?: string
  duration?: number
  type?: MessageType
}
type MessageInput = string | MessageOptions
type MessageApi = {
  (options: MessageInput): void
  install: (app: App, options?: Partial<MessageOptions>) => void
  info: (options: MessageInput) => void
  warn: (options: MessageInput) => void
  success: (options: MessageInput) => void
  error: (options: MessageInput) => void
}
type MessageExpose = {
  add: (options: Required<Pick<MessageOptions, 'duration' | 'message' | 'type'>>) => void
}

const defaultOptions = {
  duration: 3000
}

let globalOptions = { ...defaultOptions }
let instance: MessageExpose | null = null
let container: HTMLElement | null = null

const getInstance = () => {
  if (instance || typeof document === 'undefined') {
    return instance
  }

  container = document.createElement('div')
  document.body.appendChild(container)

  const app = createApp(MessageComponent)
  instance = app.mount(container) as unknown as MessageExpose

  return instance
}

const normalizeOptions = (options: MessageInput, type: MessageType) => {
  const normalizedOptions = typeof options === 'string' ? { message: options } : options || {}

  return {
    ...globalOptions,
    ...normalizedOptions,
    type,
    message: normalizedOptions.message || ''
  }
}

const open = (options: MessageInput, type: MessageType = 'info') => {
  getInstance()?.add(normalizeOptions(options, type))
}

const Message = open as MessageApi

Message.info = (options) => open(options, 'info')
Message.warn = (options) => open(options, 'warn')
Message.success = (options) => open(options, 'success')
Message.error = (options) => open(options, 'error')

Message.install = (app: App, options = {}) => {
  globalOptions = {
    ...defaultOptions,
    ...options
  }
  app.config.globalProperties.$message = Message
}

export default Message
