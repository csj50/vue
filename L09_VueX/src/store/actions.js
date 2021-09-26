export default {
    adds(context) {  //context承接上下文，否则无法获取到mutation，和this有些相似
        //context.commit('add');
        //异步处理
        setTimeout(function() {
          context.commit('add');
        }, 0);  //间隔1秒执行
      },
      mins(context) {
        context.commit('min');
      }
}