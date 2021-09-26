export default {
    // 数据过滤
    getState(state) {
        if (state.count >= 0) {
          return state.count;
        } else {
          state.count = 0;
          return 0;
        }
      }
}