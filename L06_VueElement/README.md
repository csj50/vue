1、安装element-ui
    cnpm install element-ui -S
    说明：-S是--save
2、按需引入
    cnpm install babel-plugin-component -D
    说明：-D是--save dev
3、修改.babelrc
    "plugins": ["transform-vue-jsx", "transform-runtime", ["component",
    {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
    }
    ]]
4、使用
  1.引入它
  import { Button, Select, Option, Step, Steps } from 'element-ui';
  2.use它
  Vue.use(Button)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Step)
  Vue.use(Steps)
  3.使用它
  复制官网例子
