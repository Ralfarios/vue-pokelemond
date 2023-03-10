import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

import "./utils/prototype/string.js";
import "./utils/prototype/number.js";

createApp(App).use(router).mount("#app");
