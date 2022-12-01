import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";

import BaseContainer from "./components/base/BaseContainer.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseBadge from "./components/base/BaseBadge.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.use(router);
app.use(store);

app.mount("#app");
