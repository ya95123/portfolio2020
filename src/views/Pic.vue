<template>
  <div id="pic">
    <!-- <Photoswipe> -->
      <!-- type1：廣告 -->
      <v-container class="section">
        <v-row class="justify-center">
          <v-col cols="12" class="type text-center"># 廣告</v-col>
          <!-- 卡片 -->
          <v-col cols="12" md="4" sm="6" v-for="(type,idx) in type1" :key="idx">
            <v-card>
              <v-img :src="type.img" v-pswp="type.img">
              </v-img>
                <v-card-title>{{type.title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- type2：Banner -->
      <v-container class="section">
        <v-row class="justify-center">
          <v-col cols="12" class="type text-center"># Banner</v-col>
          <!-- 卡片 -->
          <v-col cols="12" md="4" sm="6" v-for="(type,idx) in type2" :key="idx">
            <v-card>
              <v-img :src="type.img" v-pswp="type.img">
              </v-img>
                <v-card-title>{{type.title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    <!-- type3：其他設計 -->
      <v-container class="section">
        <v-row class="justify-center">
          <v-col cols="12" class="type text-center"># 其他設計</v-col>
          <!-- 卡片 -->
          <v-col cols="12" md="4" sm="6" v-for="(type,idx) in type3" :key="idx">
            <v-card>
              <v-img :src="type.img" v-pswp="type.img">
              </v-img>
                <v-card-title>{{type.title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    <div class="spacerB"></div>
    <!-- </Photoswipe> -->
  </div>
</template>

<script>
export default {
  name: 'Pic',
  data: () => ({
    type1: [
      {
        img: require('../assets/pic/MC_ice.jpg'),
        title: '冰炫風廣告單'
      },
      {
        img: require('../assets/pic/new_balamce_AD.jpg'),
        title: 'New Balamce 廣告仿作'
      },
      {
        img: require('../assets/pic/wink_1_AD.jpg'),
        title: '酒廣告 版型 1'
      },
      {
        img: require('../assets/pic/wink_2_AD.jpg'),
        title: '酒廣告 版型 2'
      },
      {
        img: require('../assets/pic/wink_bottle.jpg'),
        title: '酒廣告 瓶身'
      }
    ],
    type2: [
      {
        img: require('../assets/pic/trip_banner.jpg'),
        title: '旅行社 Banner 仿作'
      },
      {
        img: require('../assets/pic/train_student_banner.jpg'),
        title: '職訓局招生 Banner'
      }
    ],
    type3: [
      {
        img: require('../assets/pic/2020_calendar.jpg'),
        title: '2020 鼠年年曆'
      },
      {
        img: require('../assets/pic/bug.jpg'),
        title: '甲蟲畫作'
      },
      {
        img: require('../assets/pic/oil_brand.jpg'),
        title: 'Olive Oil 品牌標示仿作'
      },
      {
        img: require('../assets/pic/marquese-chriss-dunking.jpg'),
        title: 'Marquese Chriss 圖文設計'
      }
    ]
  })
}
</script>
