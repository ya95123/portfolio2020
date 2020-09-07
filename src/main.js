import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '../css/style.css'
import vuescroll from 'vuescroll'

Vue.config.productionTip = false

Vue.use(vuescroll, {
  // 在這裡設置全局默認配置
  ops: {
    vuescroll: {
      vuescroll: {
        mode: 'slide',
        sizeStrategy: 'number',
        detectResize: true
      }
    },
    scrollPanel: {
      initialScrollY: false,
      initialScrollX: false,
      scrollingX: false,
      scrollingY: true,
      speed: 300,
      easing: undefined,
      verticalNativeBarPos: 'right',
      maxHeight: 10000,
      maxWidth: undefined
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#6AC7E6',
      opacity: 0.7,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false
    }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
