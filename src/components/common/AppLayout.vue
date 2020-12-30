<template>
  <PageLoading />
  <div id="app-content" :class="{'block': lock}">
    <slot></slot>
  </div>
  <AppFooter />
</template>

<script>
import { useLoading } from '@/components/PageLoading/config/useLoading';
import PageLoading from '@/components/PageLoading';
import AppFooter from '@/components/AppFooter';

export default {
  components: {
    PageLoading,
    AppFooter
  },
  setup() {
    const lock = useLoading();

    return {
      lock
    };
  }
};
</script>

<style lang="scss" scoped>
#app-content {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
}

.block {
  height: 100vh;
}
</style>