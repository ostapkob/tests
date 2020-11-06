import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import getters from "./getters/getters"
import mutations from "./mutations/mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    last_data: [],
    krans_data: [],
    usm_data: [],
    selectedFeatures: [],
    // ip:'http://m1.nmtport.ru',
    ip:'https://m1.nmtport.ru',
    // ip:      'http://127.0.0.1:5000',
    last_data_api: '',
    kran_api: '',
    usm_api: '',
    // kran_api: 'http://94.154.76.136/api/v1.0/get_data_period_with_fio_now/kran',
    // usm_api: 'http://94.154.76.136/api/v1.0/get_data_period_with_fio_now/usm',
    errored_last_data: false,
  },
  actions: {
    GET_IP ({commit}) {
      commit('CHANGE_IP') // i am doing this because need change ip for the test
    },
    GET_LAST_DATA({commit}) {
      return axios(this.state.last_data_api, {
          method: "GET"
      })
      .then(args => {
          commit('SET_LAST_DATA_TO_STATE', args.data);
          return args;
      })
      .catch(error => {
          commit('ERROR_STATE_LAST_DATA' );
          console.log(error)
          return error;
      })
    },
    GET_KRANS_DATA({commit}) {
      return axios(this.state.kran_api, {
          method: "GET"
      })
      .then(args => {
          commit('SET_KRANS_DATA_TO_STATE', args.data);
          return args;
      })
      .catch(error => {
          console.log(error)
          return error;
      })
    },
    GET_USM_DATA({commit}) {
      return axios(this.state.usm_api, {
          method: "GET"
      })
      .then(args => {
          commit('SET_USM_DATA_TO_STATE', args.data);
          return args;
      })
      .catch(error => {
          console.log(error)
          return error;
      })
    },

    SET_KRANS_API({commit}, value) {
      commit('CHANGE_KRANS_API', value);
      return axios(this.state.kran_api, {
          method: "GET"
      })
      .then(args => {
          commit('SET_KRANS_DATA_TO_STATE', args.data);
          return args;
      })
      .catch(error => {
          console.log(error)
          return error;
      })
    },
    SET_SELECTED_FEATURES({commit}, value) {
          commit('SET_SELECTED_FEATURES_TO_STATE', value);
    },
    SET_USM_API({commit}, value) {
      commit('CHANGE_USM_API', value);
      return axios(this.state.usm_api, {
          method: "GET"
      })
      .then(args => {
          commit('SET_USM_DATA_TO_STATE', args.data);
          return args;
      })
      .catch(error => {
          console.log(error)
          return error;
      })
    },
  },
  mutations,
  getters,
}


)
