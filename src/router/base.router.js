const _import = path => () => import('@/views/' + path + '.vue');

export default [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: _import('error/404')
  }
];