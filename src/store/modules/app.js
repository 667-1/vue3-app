const state = {
  pageLoading: false
};

const mutations = {
  SHOW_PAGE_LOADING(state) {
    state.pageLoading = true;
  },
  HIDE_PAGE_LOADING(state) {
    state.pageLoading = false;
  }
};

const actions = {};

export default {
  state,
  mutations,
  actions
};
