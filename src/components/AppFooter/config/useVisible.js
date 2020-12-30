import { useRoute } from 'vue-router';
import footerList from './footerList';

export function useVisible() {
  const route = useRoute();
  const name = route.name;
  return footerList.some(i => i === name);
}
