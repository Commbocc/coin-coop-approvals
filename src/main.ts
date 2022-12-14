import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'iframe-resizer/js/iframeResizer.contentWindow'

createApp(App).use(router).mount('#app')
