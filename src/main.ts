import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import bnUi from './packages/index'

const app = createApp(App);

app.use(bnUi)
app.use(router)

app.mount('#app')
