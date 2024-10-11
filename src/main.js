import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faSpinner, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './lib/store';
import router from './router';


// Add icons to the library
library.add(faHome, faUser, faSpinner, faCartShopping);

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
