import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/DashboardLayout.vue'),
      children: [
        { path: '', name: 'overview', component: () => import('../pages/OverviewPage.vue') },
        { path: 'analytics', name: 'analytics', component: () => import('../pages/AnalyticsPage.vue') },
        { path: 'customers', name: 'customers', component: () => import('../pages/CustomersPage.vue') },
        { path: 'products', name: 'products', component: () => import('../pages/ProductsPage.vue') },
        { path: 'reports', name: 'reports', component: () => import('../pages/ReportsPage.vue') },
        { path: 'settings', name: 'settings', component: () => import('../pages/SettingsPage.vue') },
      ],
    },
  ],
})

export default router
