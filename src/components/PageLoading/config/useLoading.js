import { computed } from 'vue';
import { useStore } from 'vuex';

export function useLoading() {
  return computed(() => useStore().state.app.pageLoading);
}
