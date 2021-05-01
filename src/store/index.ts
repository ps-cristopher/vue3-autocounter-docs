import { createStore } from 'vuex';

interface State {
  isDarkMode: boolean;
  isShowingSideBar: boolean;
}

export default createStore({
  state: {
    isDarkMode: false,
    isShowingSideBar: false,
  },
  mutations: {
    SET_DARK_MODE(state: State, isDarkMode: boolean) {
      state.isDarkMode = isDarkMode;
    },
    SET_SHOWING_SIDEBAR(state: State, isShowingSideBar: boolean) {
      state.isShowingSideBar = isShowingSideBar;
    },
  },
  actions: {
    setDarkMode({ commit }, isDarkMode: boolean): void {
      if (isDarkMode) {
        document.getElementById('html').className = 'dark';
      } else document.getElementById('html').className = '';

      localStorage.setItem('isDarkMode', isDarkMode ? 'true' : 'false');

      commit('SET_DARK_MODE', isDarkMode);
    },
    toggleSideBar({ commit, state }): void {
      const { isShowingSideBar } = state;
      if (isShowingSideBar) commit('SET_SHOWING_SIDEBAR', false);
      else commit('SET_SHOWING_SIDEBAR', true);
    },
  },
});
