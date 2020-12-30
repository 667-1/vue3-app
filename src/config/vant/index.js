import {
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Empty
} from 'vant';

export function setupVant(app) {
  app
    .use(Button)
    .use(Toast)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Empty)
}
