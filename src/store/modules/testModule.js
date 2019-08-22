import {
  INCREMENT_COUNT,
} from '../constants/mutationTypes';

const testModule = {
  state: {
    count: 0,
  },
  mutations: {
    [INCREMENT_COUNT](state, payload) {
      const { amount } = payload;
      state.count += Number(amount);
    },
  },
  actions: {
    incrementCount({ commit }, amount) {
      commit({
        type: INCREMENT_COUNT,
        amount,
      });
    },
  },
  getters: {
    count: state => state.count,
  },
};

export default testModule;
