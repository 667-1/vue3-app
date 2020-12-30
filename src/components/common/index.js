// common文件夹下的组件自动注册成全局组件
const component = require.context('../common', false, /.vue$/);

export function setupComponent(app) {
  component.keys().forEach(item => {
    const name = item.match(/.\/(\S*).vue/)[1];
    app.component(name, component(item).default);
  });
}