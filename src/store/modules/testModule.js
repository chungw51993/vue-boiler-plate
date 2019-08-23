import {
  INCREMENT_COUNT,
  CHANGE_TEST_VALUE,
} from '../constants/mutationTypes';

const getInitialState = () => ({
  count: 0,
  add: 0,
});

const initialState = getInitialState();

const mutations = {
  [INCREMENT_COUNT](state, payload) {
    const { amount } = payload;
    state.count += Number(amount);
    state.add = 0;
  },
  [CHANGE_TEST_VALUE](state, payload) {
    const { field, value } = payload;
    state[field] = value;
  },
};

const actions = {
  incrementCount({ commit }, amount) {
    commit({
      type: INCREMENT_COUNT,
      amount,
    });
  },
  changeTestStateInfo({ commit }, info) {
    const { field, value } = info;
    commit({
      type: CHANGE_TEST_VALUE,
      field,
      value,
    });
  },
};

const getters = {
  testState: state => state,
};

const testModule = {
  state: initialState,
  mutations,
  actions,
  getters,
};

export default testModule;
