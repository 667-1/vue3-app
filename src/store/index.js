import { createStore } from 'vuex';
import app from './modules/app';

const store = createStore({
  modules: {
    app
  }
});

export function setupStore(app) {
  app.use(store);
}

export function commitStore(type) {
  store.commit(type);
}

export default store;
