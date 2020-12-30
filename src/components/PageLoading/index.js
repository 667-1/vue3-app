import { defineComponent } from 'vue';
import { useLoading } from './config/useLoading';
import style from './index.module.scss';

export default defineComponent({
  render() {
    const showLoading = useLoading().value;

    return (
      <>
        {
          showLoading ? (
            <div className={style['app-loading']}>
              <img src="https://ui.aiyichuan.com/xcx_urm/img/common/loading-dz.gif" alt="loading..." />
            </div>
          ) : ''
        }
      </>
    );
  }
});
