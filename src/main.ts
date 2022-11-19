import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { camelCaseToLine } from "./utils/str-util";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon${camelCaseToLine(key)}`, component);
}
app.use(router);
app.use(createPinia());
app.mount("#app");
