import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify,  {
  theme: {
    primary: '#9c27b0',
    secondary: '#03a9f4',
    accent: '#4caf50',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#8bc34a',
    success: '#2196f3'
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
