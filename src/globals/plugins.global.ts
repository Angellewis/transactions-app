import Vue from 'vue';
import Axios from 'axios';
Vue.prototype.$http = Axios;

//Buefy
import Buefy from 'buefy';
import 'buefy/dist/buefy.css'
Vue.use(Buefy, {
  defaultProgrammaticPromise: true,
});
