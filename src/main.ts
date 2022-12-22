import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faEllipsisV, faCheckCircle, faExclamationCircle, faTrash, faUser, faGlobe, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { PromiseDialog } from 'vue3-promise-dialog'
import App from '@/App.vue'
import router from '@/router'

const pinia = createPinia()

library.add(faStackOverflow, faSquare, faSquareCheck, faSearch, faEllipsisV, faCheckCircle, faExclamationCircle, faTrash, faUser, faGlobe, faLandmark)

const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(PromiseDialog)

app.mount('#app')
