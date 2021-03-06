import Vuex from 'vuex'

import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      selectedfilter: 'all',
      locales: ['fi', 'en'],
      locale: 'fi'
    },
    mutations
  })
}

export default createStore
