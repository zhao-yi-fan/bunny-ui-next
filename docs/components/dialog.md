# Dialog

<p class="lead">居中弹窗，支持遮罩关闭、Esc 关闭和底部插槽。</p>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<div class="component-demo">
  <bn-button type="primary" @click="visible = true">打开弹窗</bn-button>
  <bn-dialog v-model="visible" title="编辑资料">
    <p>这是一个 Vue 3 版本的 Bunny UI Dialog。</p>
    <template #footer>
      <bn-button @click="visible = false">取消</bn-button>
      <bn-button type="primary" @click="visible = false">确认</bn-button>
    </template>
  </bn-dialog>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示弹窗，用于 `v-model`。 | `boolean` | `false` |
| `title` | 弹窗标题。 | `string` | `''` |
| `closeOnClickModal` | 点击遮罩是否关闭。 | `boolean` | `true` |
| `closeOnPressEscape` | 按 Esc 是否关闭。 | `boolean` | `true` |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `update:modelValue` | 更新弹窗显示状态。 |
| `open` | 弹窗打开时触发。 |
| `close` | 弹窗关闭时触发。 |
