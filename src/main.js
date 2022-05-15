import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import VueExcelXlsx from "vue-excel-xlsx";
// import Vue from "vue";

createApp(App).use(router).mount("#app");
// createApp(App).use(router).use(VueExcelXlsx).mount("#app");

// Vue.use(VueExcelXlsx);
