import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import resetStore from '~/stores/plugins/reset-store'

// element plus implementation
import ElementPlus from "element-plus";
import de from 'element-plus/es/locale/lang/de'

// uno, resolves css / sass issues
import 'uno.css'
import "~/styles/index.scss";

const pinia = createPinia()
pinia.use(resetStore)
const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(ElementPlus, { locale: de })
app.mount("#app")
