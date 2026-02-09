export default [
  {
    path: '/attendance-report',
    name: 'Report',
    redirect: '/assembly',
    meta: {
      breadcrumb: 'Report',
      showInMenu: true,
      title: 'Report',
      icon: 'OrderedListOutlined',
      roles: ['admin', 'staff'],
    },
    children: [
      {
        path: '/assembly',
        name: ' Assembly',
        component: () => import('@/views/attendanceReport/attendanceReport/MasterAttendanceReport.vue'),
        meta: {
          // requiresAuth: true,
          requiresAuth: false,
          roles: ['admin', 'staff'],
          breadcrumb: 'Assembly',
          showInMenu: true,
          title: 'Assembly',
        },
      },
    ],
  },
]
