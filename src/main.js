import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faSpinner, faCartShopping, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './lib/store';
import router from './router';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';


// Add icons to the library
library.add(faHome, faUser, faSpinner, faCartShopping, faFile);

createApp(App).use(Toast, {
    position: POSITION.TOP_RIGHT
}).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
