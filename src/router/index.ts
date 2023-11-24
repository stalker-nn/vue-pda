import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout.vue'
//import DefaultLayout from '@/layouts/DefaultLayout'
import ErrorLayout from '@/layouts/ErrorLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import DomainView from '@/views/Domain/DomainView.vue'
import MailboxView from '@/views/Mailbox/MailboxView.vue'
import AliasView from '@/views/Alias/AliasView.vue'
import ErrorView from '@/views/Error/ErrorView.vue'
import LoginView from '@/views/Login/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta : {
        layout: DashboardLayout,
        title: 'Dashboard title'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta : {
        layout: LoginLayout,
        title: 'Login title'
      }
    },
    {
      path: '/domains',
      name: 'domains',
      component: DomainView,
      meta : {
        layout: DashboardLayout,
        title: 'Domains title'
      }
    },
    {
      path: '/mailboxes',
      name: 'mailboxes',
      component: MailboxView,
      meta : {
        layout: DashboardLayout,
        title: 'Mailboxes title'
      }
    },
    {
      path: '/aliases',
      name: 'aliases',
      component: AliasView,
      meta : {
        layout: DashboardLayout,
        title: 'Aliases title'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: ErrorView,
      meta : {
        layout: ErrorLayout,
        title: 'Error title'
      }
    }
  ]
})

export default router
