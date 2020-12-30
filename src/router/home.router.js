const _import = path => () => import('@/views/' + path + '.vue');

export default [
  {
    path: '/',
    name: 'home',
    component: _import('home/index')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      pageLoading: false
    },
    component: _import('home/test')
  }
];
