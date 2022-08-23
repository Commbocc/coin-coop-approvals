import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/home.vue'
import Print from './views/print.vue'

import { fetchDepartments } from './lib/departments'

const routes = [
  { path: '/', component: Home },
  {
    path: '/:id',
    component: Print,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async () => {
  await fetchDepartments()
})

export { router }
