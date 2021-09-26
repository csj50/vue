export default {
    add (state) {  //接收state参数
        //变更状态
        state.count++;
      },
      min (state) {
        state.count--;
      },
      login (state) {
        state.isLogin = true;
      },
      logout (state) {
        state.isLogin = false;
      }
}