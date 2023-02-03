import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/components/HomePage.vue'
import AboutPage from '../src/components/AboutPage.vue'
import Links from '../src/components/MyLinks.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../src/components/BlogPosts')
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  {
    path: '/files',
    name: 'Files',
    component: () => import('../src/components/FileTree')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
