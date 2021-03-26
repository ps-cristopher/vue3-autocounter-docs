import { createStore } from 'vuex';

interface State {
  isDarkMode: boolean;
}

export default createStore({
  state: {
    isDarkMode: false,
  },
  mutations: {
    SET_DARK_MODE(state: State, isDarkMode: boolean) {
      state.isDarkMode = isDarkMode;
    },
  },
  actions: {
    setDarkMode({ commit }, isDarkMode: boolean): void {
      if (isDarkMode || (!('isDarkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.getElementById('html').className = 'dark';
      } else document.getElementById('html').className = '';

      localStorage.setItem('isDarkMode', isDarkMode ? 'true' : 'false');

      commit('SET_DARK_MODE', isDarkMode);
    },
  },
});
