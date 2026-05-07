<template>
  <div class="messages" v-if="messages.length">
    <div
      v-for="item in messages"
      :key="item.id"
      class="bn-message"
      :class="`bn-message--${item.type}`"
    >
      {{ item.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

type MessageType = 'info' | 'warn' | 'success' | 'error'
type MessageItem = {
  id: number
  type: MessageType
  message: string
  duration: number
  timer?: ReturnType<typeof setTimeout>
}

export default defineComponent({
  name: 'BnMessage',
  setup(_, { expose }) {
    const messages = reactive<MessageItem[]>([])
    let id = 0

    const remove = (message: MessageItem) => {
      if (message.timer) {
        clearTimeout(message.timer)
      }
      const index = messages.findIndex(item => item.id === message.id)
      if (index > -1) {
        messages.splice(index, 1)
      }
    }

    const add = (options: Omit<MessageItem, 'id' | 'timer'>) => {
      const message: MessageItem = {
        ...options,
        id: id++
      }

      messages.push(message)
      message.timer = setTimeout(() => {
        remove(message)
      }, message.duration)
    }

    expose({
      add
    })

    return {
      messages
    }
  }
})
</script>
