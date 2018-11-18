const mutations = {
  setFilter(state,filter) {
    state.selectedfilter = filter;
  },
  setLang(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export default mutations
