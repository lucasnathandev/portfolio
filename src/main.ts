import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./shared/lib/router";
import pinia from "./shared/lib/pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const solid = [faCheckCircle];

const brands = [faGithub, faLinkedin, faGoogle, faInstagram, faTwitter];

library.add(...brands, ...solid);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
