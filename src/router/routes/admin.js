export default [
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/member-management',
    meta: {
      breadcrumb: 'Admin',
      showInMenu: true,
      title: 'Admin',
      icon: 'TeamOutlined',
      roles: ['admin'],
    },
    children: [
      {
        path: '/member-management',
        name: 'Employees',
        component: () => import('@/views/memberManagement/memberManagement/MasterMemberManagement.vue'),
        meta: {
          // requiresAuth: true,
          requiresAuth: false,
          roles: ['admin'],
          breadcrumb: 'Employees',
          showInMenu: true,
          title: 'Employees',
        },
      },
    ],
  },
]
