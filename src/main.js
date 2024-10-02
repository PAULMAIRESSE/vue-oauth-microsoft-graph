import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faSpinner, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faHome, faUser, faSpinner, faCartShopping);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
