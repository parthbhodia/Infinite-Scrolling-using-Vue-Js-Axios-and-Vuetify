import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import infiniteScroll from 'vue-infinite-scroll'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(infiniteScroll)
  .mount('#app')
