<template>
  <div id="app">
    <h1>ECharts Sample !</h1>
    <h3>Bar chart</h3>
    <v-chart :options="chartOptionsBar"/>
    <h3>Basic Radar Chart</h3>
    <v-chart :options="chartOptionsBasicRadar"/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'

export default {
  name: 'app',
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      chartOptionsBar: {
        xAxis: {
          data: ['Q1', 'Q2', 'Q3', 'Q4']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            data: [63, 75, 24, 92]
          }
        ]
      },
      chartOptionsBasicRadar: {
        title: {
          text: 'Basic Radar Chart'
        },
        legend: {
          bottom: 0,
          data: [
            'Tao',
            'Big',
            'Todz',
            'Benz',
            'Tai',
          ]
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {
              name: 'HTML & CSS',
              max: 100
            },
            {
              name: 'Javascript',
              max: 100
            },
            {
              name: 'VueJS',
              max: 100
            },
            {
              name: 'React',
              max: 100
            },
            {
              name: 'SEO',
              max: 100
            },
            {
              name: 'Animation',
              max: 100
            }
          ]
        },
        series: [
          {
            name: 'Test',
            type: 'radar',
            data: [
              {
                value: [20, 50, 53, 50, 65, 50],
                name: 'Tao'
              },
              {
                value: [40, 80, 50, 55, 34, 50],
                name: 'Big'
              },
              {
                value: [100, 50, 89, 50, 30, 20],
                name: 'Todz'
              },
              {
                value: [20, 50, 99, 76, 30, 50],
                name: 'Benz'
              },
              {
                value: [50, 40, 100, 99, 24, 43],
                name: 'Tai'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
