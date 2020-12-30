import { AxiosCanceler } from '@/utils/axios/axiosCancel';
import { commitStore } from '@/store';

export function routerGuard(router) {

  router.beforeEach(to => {
    console.log('before-to', to);
    new AxiosCanceler().removeAllPending();
    if (to.meta.pageLoading !== false) commitStore('SHOW_PAGE_LOADING');
  });

}