import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

//引入element
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//引入jQuery
import jQuery from 'jquery';


const app = createApp(App);
app.use(ElementPlus);
app.use(jQuery);
app.use(router);
app.use(store);
app.mount('#app');



// createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
