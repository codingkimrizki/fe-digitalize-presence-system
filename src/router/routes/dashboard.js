export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/',
    meta: {
      breadcrumb: 'Dashboard',
      showInMenu: true,
      title: 'Dashboard',
      icon: 'DashboardOutlined',
      roles: ['admin', 'staff', 'user'],
    },
    children: [
      {
        path: '/',
        name: 'Machine Dashboard',
        component: () => import('@/views/dashboard/machine/MainDashboard.vue'),
        meta: {
          // requiresAuth: true,
          requiresAuth: false,
          roles: ['admin', 'staff', 'user'],
          breadcrumb: 'Machine',
          showInMenu: true,
          title: 'Machine',
        },
      },
    ],
  },
]
