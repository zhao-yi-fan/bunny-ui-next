# Input

<p class="lead">单行输入框，支持图标、尺寸切换和清空操作。</p>

<script setup>
import { ref } from 'vue'

const keyword = ref('')
const email = ref('team@bunny-ui.dev')
</script>

<div class="component-demo">
  <div class="component-demo__stack">
    <bn-input v-model="keyword" placeholder="搜索组件" prefix-icon="search" clearable></bn-input>
    <bn-input v-model="email" placeholder="邮箱地址" suffix-icon="check"></bn-input>
    <div class="component-demo__caption">keyword: {{ keyword }} | email: {{ email }}</div>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 绑定值，用于 `v-model`。 | `string` | `''` |
| `placeholder` | 原生占位文本。 | `string` | `''` |
| `disabled` | 是否禁用。 | `boolean` | `false` |
| `clearable` | 有值时是否显示清空按钮。 | `boolean` | `false` |
| `size` | 输入框尺寸。 | `small \| medium \| large` | `medium` |
| `prefixIcon` | 前置图标名称。 | `string` | `''` |
| `suffixIcon` | 后置图标名称。 | `string` | `''` |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `update:modelValue` | 用于 `v-model` 的实时值更新。 |
| `change` | 原生 change 触发或点击清空时触发。 |
| `clear` | 点击清空按钮时触发。 |
