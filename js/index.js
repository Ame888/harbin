$(function () {
    echart_1();
    echart_2();
    echart_3();
    echart_4();
    echart_5();
    echart_6();

    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 8025, name: '赞扬' },
        { value: 5127, name: '惊奇' },
        { value: 4051, name: '悲伤' },
        { value: 2010, name: '恐惧' },
        { value: 585, name: '厌恶' },
        { value: 123, name: '愤怒' },
        { value: 1642, name: '喜悦' }
      ]
    }
  ]
};

    if (option && typeof option === 'object')
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        option = {
         dataset: [
    {
      dimensions: ['name', 'score'],
      source: [
        ['视频信息',39235],
        ['APP信息',10522],
        ['微博信息',8155],
        ['头条号信息',7178],
        ['网页信息',3957],
        ['微信信息',3788],
        ['论坛信息',705],
        ['问答信息',88],
        ['报刊信息',75]
      ]
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'score', order: 'desc' }
      }
    }
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 }
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'name', y: 'score' },
    datasetIndex: 1
  }
};

    if (option && typeof option === 'object')
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));

        option = {

};

    if (option && typeof option === 'object')
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echart_4() {
       var myChart = echarts.init(document.getElementById('chart_4'));
       option = {
   legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 4827, name: '黑龙江' },
        { value: 1908, name: '北京' },
        { value: 1169, name: '广东' },
        { value: 676, name: '山东' },
        { value: 603, name: '湖南' },
        { value: 597, name: '吉林' },
        { value: 576, name: '四川' },
        { value: 548, name: '江苏' },
        { value: 533, name: '辽宁' },
        { value: 491, name: '浙江' }
      ]
    }
  ]
};

   if (option && typeof option === 'object')
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echart_5() {
       var myChart = echarts.init(document.getElementById('chart_5'));
       option = {
   xAxis: {
    type: 'category',
    data: ['11-01', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07', '11-08', '11-09', '11-10', '11-11', '11-12', '11-13', '11-14', '11-15', '11-16', '11-17', '11-18', '11-19', '11-20', '11-21', '11-22', '11-23', '11-24', '11-25', '11-26', '11-27', '11-28', '11-29', '11-30']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [1090, 1020, 947, 3972, 1008, 1539, 1932, 1611, 1936, 1693, 1580, 1540, 1723, 1947, 1925, 1861, 2069, 1725, 1658, 2437, 2478, 2401, 2394, 2309, 1752, 1964, 2383, 2505, 3298, 2775],
      type: 'line',
      smooth: true
    }
  ]
};


   if (option && typeof option === 'object')
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echart_6() {
       var myChart = echarts.init(document.getElementById('chart_6'));
       option = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        {
  "value": 28025,
  "name": "其他"
},
{
  "value": 24161,
  "name": "旅行"
},
{
  "value": 2408,
  "name": "社会"
},
{
  "value": 1302,
  "name": "娱乐"
},
{
  "value": 1242,
  "name": "时政"
},
{
  "value": 436,
  "name": "时尚"
},
{
  "value": 372,
  "name": "游戏"
},
{
  "value": 298,
  "name": "房产"
},
{
  "value": 243,
  "name": "美食"
},
{
  "value": 208,
  "name": "财经"
},
{
  "value": 181,
  "name": "教育"
},
{
  "value": 115,
  "name": "体育"
},
{
  "value": 112,
  "name": "文学"
}
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
   if (option && typeof option === 'object')
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    })