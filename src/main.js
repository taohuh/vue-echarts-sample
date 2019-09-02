import Vue from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts/components/ECharts'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
