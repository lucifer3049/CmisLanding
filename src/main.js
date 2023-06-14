import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/scss/site.scss";
import "primeicons/primeicons.css";
import "@/assets/css/all.min.css";
import "@/assets/css/normalize.css";


let app = createApp(App);


app.use(router).mount("#app");

