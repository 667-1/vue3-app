<template>
  <div class="hello">
    <div class="h1">{{msg}}</div>
    <van-button class="btn" type="primary" :block="true" loading-text="加载中..." @click="btnClick">主要按钮</van-button>
    <pre class="msg">{{data}}</pre>
  </div>
</template>

<script>
import { test } from '@/api/test';
import { reactive, onMounted, toRefs } from 'vue';

export default {
  props: {
    msg: String
  },
  setup() {
    let state = reactive({
      data: {}
    });

    onMounted(async () => {
      try {
        const res = await test();
        state.data = res;
        console.log('res', res, state);
      } catch (e) {
        console.log(e);
      }
    });

    const btnClick = () => {
      test().then(res => {
        console.log(res);
      });
    };
    return { ...toRefs(state), btnClick };
  }
};
</script>

<style lang="scss" scoped>
.h1 {
  font-size: 50px;
}
</style>