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
        name: 'Attendance Dashboard',
        component: () => import('@/views/dashboard/dashboard/DashboardAttendance.vue'),
        meta: {
          // requiresAuth: true,
          requiresAuth: false,
          roles: ['admin', 'staff', 'user'],
          breadcrumb: 'Realtime Presence',
          showInMenu: true,
          title: 'Realtime Presence',
        },
      }
    ],
  },
]
