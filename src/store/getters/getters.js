export default {
  LAST_DATA(state) {
    //console.log(state.ip)
    //console.log('store last_data getters');
    return state.last_data;
  },
  KRANS_DATA(state) {
    // console.log('store kran  getters');
    return state.krans_data;
  },
  USM_DATA(state) {
    // console.log('store usm  getters');
    return state.usm_data;
  },
  SELECTED_FEATURES(state) {
    return state.selectedFeatures
  },
  FILTER_LAST_DATA(state) {
    return state.mechFilter
  },
  FLAG_AUDIO(state) {
    return state.flagAudio
  },
  FLAG_NOTIFICATION(state) {
    return state.flagNotification
  }
}
