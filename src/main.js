// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vue2Filters from 'vue2-filters';
import App from './App';
import router from './router';
import GlobalStyles from './assets/styles/styles.scss';

Vue.config.productionTip = false;
Vue.use(Vue2Filters);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  GlobalStyles,
  template: '<App/>',
  components: { App },
});
