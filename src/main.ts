import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./shared/lib/router";
import pinia from "./shared/lib/pinia";
const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount("#app");
