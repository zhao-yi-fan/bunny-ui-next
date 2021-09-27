import { createApp } from 'vue'
import App from './App.vue'

import bnUi from './packages/index'

let app = createApp(App);

app.use(bnUi)

app.mount('#app')
