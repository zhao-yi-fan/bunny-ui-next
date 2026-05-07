<template>
  <main class="demo-page">
    <section class="demo-section">
      <h1>Bunny UI Next</h1>
      <p>Vue 3 component playground</p>
      <div class="demo-row">
        <bn-button type="primary" icon="search" @click="addMessage">主要按钮</bn-button>
        <bn-button type="success" @click="addMessage">成功按钮</bn-button>
        <bn-button type="warning" @click="addMessage">警告按钮</bn-button>
        <bn-button type="danger" loading>加载中</bn-button>
      </div>
    </section>

    <section class="demo-section">
      <h2>Form</h2>
      <div class="demo-row">
        <bn-input v-model="keyword" placeholder="搜索组件" prefix-icon="search" clearable></bn-input>
        <bn-input v-model="email" placeholder="邮箱地址" suffix-icon="check"></bn-input>
      </div>
    </section>

    <section class="demo-section">
      <h2>Feedback</h2>
      <div class="demo-row">
        <bn-tag type="success" closable @close="addMessage">Vue 3</bn-tag>
        <bn-icon name="warning" :size="24" color="#d97706"></bn-icon>
        <bn-button @click="dialogVisible = true">打开弹窗</bn-button>
      </div>
      <bn-divider>分割线</bn-divider>
      <bn-button-group size="small">
        <bn-button>上一页</bn-button>
        <bn-button>下一页</bn-button>
      </bn-button-group>
    </section>

    <bn-dialog v-model="dialogVisible" title="Bunny UI Next">
      <p>这是 Vue 3 版本的 Bunny UI 演示弹窗。</p>
      <template #footer>
        <bn-button @click="dialogVisible = false">取消</bn-button>
        <bn-button type="primary" @click="dialogVisible = false">确认</bn-button>
      </template>
    </bn-dialog>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Message } from '../packages';

export default defineComponent({
  name: 'Home',
  setup() {
    const keyword = ref('');
    const email = ref('team@bunny-ui.dev');
    const dialogVisible = ref(false);

    const addMessage = function() {
      Message.success({
        message: '操作成功',
        duration: 3000
      });
    };

    return {
      keyword,
      email,
      dialogVisible,
      addMessage
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-page {
  min-height: 100vh;
  padding: 32px;
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f8fafc;
}

.demo-section {
  max-width: 920px;
  margin: 0 auto 24px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
}

h1,
h2,
p {
  margin: 0 0 16px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
