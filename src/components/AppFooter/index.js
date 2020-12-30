import { ref, defineComponent } from 'vue';
import { useVisible } from './config/useVisible';
import style from './index.module.scss';

export default defineComponent({
  setup() {
    const active = ref('home');

    return { active };
  },
  render() {
    const visible = useVisible();

    return (
      <>
        {visible ? (
          <footer itemID={style['app-footer']}>
            <van-tabbar v-model={this.active} route={true}>
              <van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
              <van-tabbar-item name="test" to="/test" icon="search">测试</van-tabbar-item>
            </van-tabbar>
          </footer>
        ) : ''}
      </>
    );
  }
});
