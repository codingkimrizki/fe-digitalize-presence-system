export default [
  {
    path: '/master-data',
    name: 'Master Data',
    redirect: '/master-machine',
    meta: {
      breadcrumb: 'Master Data',
      showInMenu: true,
      title: 'Master Data',
      icon: 'DatabaseOutlined',
      roles: ['admin', 'staff'],
    },
    children: [
      {
        path: '/master-machine',
        name: ' Master Machine',
        component: () => import('@/views/master/machine/MasterMachine.vue'),
        meta: {
          // requiresAuth: true,
          requiresAuth: false,
          roles: ['admin', 'staff'],
          breadcrumb: 'Machine',
          showInMenu: true,
          title: 'Machine',
        },
      },
    ],
  },
]
