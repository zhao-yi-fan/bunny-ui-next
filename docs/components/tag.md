# Tag

<p class="lead">用于标记分类、状态和轻量属性。</p>

<script setup>
import { ref } from 'vue'

const closed = ref(false)
</script>

<div class="component-demo">
  <div class="component-demo__row">
    <bn-tag>默认</bn-tag>
    <bn-tag type="success">成功</bn-tag>
    <bn-tag type="warning">警告</bn-tag>
    <bn-tag type="danger">危险</bn-tag>
    <bn-tag type="info" closable @close="closed = true">可关闭</bn-tag>
    <span v-if="closed" class="component-demo__caption">已触发 close</span>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 标签类型。 | `default \| success \| warning \| danger \| info` | `default` |
| `size` | 标签尺寸。 | `small \| medium \| large` | `medium` |
| `closable` | 是否显示关闭按钮。 | `boolean` | `false` |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `close` | 点击关闭按钮时触发。 |
