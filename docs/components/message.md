# Message

<p class="lead">用于页面顶部反馈操作结果，支持全局 `$message` 和命名导出调用。</p>

<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
</script>

<div class="component-demo">
  <div class="component-demo__row">
    <bn-button @click="proxy.$message.info('这是一条提示')">Info</bn-button>
    <bn-button type="success" @click="proxy.$message.success('保存成功')">Success</bn-button>
    <bn-button type="warning" @click="proxy.$message.warn('请检查输入')">Warn</bn-button>
    <bn-button type="danger" @click="proxy.$message.error('提交失败')">Error</bn-button>
  </div>
</div>

## API

```ts
Message.info('提示信息')
Message.success({ message: '保存成功', duration: 2000 })
Message.warn('请检查输入')
Message.error('提交失败')
```

全局安装后可使用：

```ts
app.config.globalProperties.$message.success('保存成功')
```
