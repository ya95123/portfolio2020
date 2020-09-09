<template>
  <div id="home">
    <!-- type1：功能型網站 -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">功能型網站</v-col>
        <v-col cols="12" md="6">
          <v-img src="../assets/web/d_hand_guesse.png" class="rounded"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          describe
        </v-col>
      </v-row>
    </v-container>

    <!-- type2：網頁切版 -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">網頁切版</v-col>
        <v-col cols="12" md="4" v-for="(t,idx) in type2" :key="idx">
          <v-card>
            <v-img :src="t.img"></v-img>
            <v-card-title>{{t.title}}</v-card-title>
            <v-card-text>{{t.text}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- type3：網頁小遊戲 -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">網頁小遊戲</v-col>
        <v-col cols="12" md="4" v-for="(type,idx) in type3" :key="idx">
          <v-card>
            <v-img :src="type.img"></v-img>
            <v-card-title>{{type.title}}</v-card-title>
            <v-card-text>{{type.text}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="spacerB"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    type2: [
      {
        img: require('../assets/web/onepage.png'),
        title: '泰山寇汀咖啡莊園',
        text: '用 Bootstrap 搭配 jQuery 外部套件做成的一頁式介紹網頁。',
        github: 'https://github.com/ya95123/bs-onePage',
        website: 'https://ya95123.github.io/bs-onePage/'
      },
      {
        img: require('../assets/web/garden_black.png'),
        title: 'CSS Zen Garden',
        text: '以現有固定的 HTML 架構，自行設計 CSS 並加上 jQuery 做成動態網頁。',
        github: 'https://github.com/ya95123/css-zen-garden',
        website: 'https://ya95123.github.io/css-zen-garden/'
      }
    ],
    type3: [
      {
        img: require('../assets/web/memoryPoker.png'),
        title: '記憶 Poker',
        text: '使用 CSS 3D 搭配 jQuery 做成的翻牌小遊戲，並設置玩家名稱及計分設定。',
        github: 'https://github.com/ya95123/game-memoryPoker',
        website: 'https://ya95123.github.io/game-memoryPoker/'
      },
      {
        img: require('../assets/web/catchstar.png'),
        title: '捉 星 星！Catch Star',
        text: '使用 jQuery 及 隨機數設定，使星星往不同方向移動做成的小遊戲，並設定最高分即可上榜。',
        github: 'https://github.com/ya95123/game-catchStar',
        website: 'https://ya95123.github.io/game-catchStar/'
      },
      {
        img: require('../assets/web/gotogether.png'),
        title: '天堂見 We will see in Heaven',
        text: '使用 JavaScript 搭配其 settimeout 功能做成的類似打地鼠遊戲，另外添上了排行榜功能。',
        github: 'https://github.com/ya95123/game-goTogether',
        website: 'https://ya95123.github.io/game-goTogether/'
      }
    ]
  })
}
</script>
