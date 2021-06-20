import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import DetailView from '../views/DetailView.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: 'detail',
      component: DetailView,
    },
  ]
})

export default router;