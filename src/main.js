import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";

import BaseContainer from "./components/base/BaseContainer.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseBadge from "./components/base/BaseBadge.vue";
import BaseSpinner from "./components/base/BaseSpinner.vue";
import BaseError from "./components/base/BaseError.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-error", BaseError);

app.use(router);
app.use(store);

app.mount("#app");
