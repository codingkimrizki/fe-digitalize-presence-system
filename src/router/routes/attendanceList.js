export default [
  {
    path: '/attendance-list',
    name: 'Attendance',
    redirect: '/assembly',
    meta: {
      breadcrumb: 'Attendance',
      showInMenu: true,
      title: 'Attendance',
      icon: 'DatabaseOutlined',
      roles: ['admin', 'staff'],
    },
    children: [
      {
        path: '/assembly',
        name: ' Assembly',
        component: () => import('@/views/attendanceList/attendenceList/MasterAttendanceList.vue'),
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
