export default [
  {
    path: '/super-admin',
    name: 'Super Admin',
    redirect: '/user-management',
    meta: {
      breadcrumb: 'Super Admin',
      showInMenu: true,
      title: 'Super Admin',
      icon: 'UserOutlined',
      roles: ['admin'],
    },
    children: [
      {
        path: '/user-management',
        name: 'User Management',
        component: () => import('@/views/admin/user/UserManagement.vue'),
        meta: {
          // requiresAuth: true,
          requiresAuth: false,
          roles: ['admin'],
          breadcrumb: 'User Management',
          showInMenu: true,
          title: 'User Management',
        },
      },
    ],
  },
]
