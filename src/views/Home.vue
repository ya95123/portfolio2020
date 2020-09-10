<template>
  <div id="home">
    <!-- type1：功能型網站 -->
    <v-container class="section">
      <v-row class="justify-center">
        <v-col cols="12" class="type text-center"># 功能型網站</v-col>
        <v-col cols="12" md="6">
          <v-img src="../assets/web/d_hand_guesse.jpg" class="rounded card"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title class="pt-0">
            狄斯俊之手 Decision Hand
          </v-card-title>
          <a
            href="https://ya95123.github.io/vue-decisionHand/#/"
            target="_blank"
            class="icon"
          >
            <v-btn icon class="ml-2" color="#6AC7E6">
              <v-icon color="#6AC7E6">
                mdi-link-variant
              </v-icon>
            </v-btn>
            <span class="green--text">網站連結</span>
          </a>
          <a
            href="https://github.com/ya95123/vue-decisionHand"
            target="_blank"
            class="icon"
          >
            <v-btn icon class="ml-2" color="#6AC7E6">
              <v-icon color="#6AC7E6">
                mdi-github
              </v-icon>
            </v-btn>
            <span class="green--text">GitHub</span>
          </a>
          <v-card-text class="text--black">
            使用 Vue.js 搭配 Vuetify 製成的功能型網站，其功能為協助易有<u>選擇困難症的人</u>，透過簡易有趣的方式，加速做決定的過程，達到減少猶豫不決的效益，其中也特別設置了團體活動常見的轉盤、轉酒瓶、抽獎功能等。
            <br><br>
            並加上 RWD 分為電腦與手機平板介面，以及增添 PWA 功能，可至網址右側的 + 號將網頁下載成應用程式。
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <!-- type2：網頁切版 -->
    <v-container class="section">
      <v-row class="justify-center">
        <v-col cols="12" class="type text-center"># 網頁切版</v-col>
        <v-col cols="12" md="4" sm="6" v-for="(type,idx) in type2" :key="idx">
          <v-card class="card">
            <v-img :src="type.img"></v-img>
            <v-card-title>
              <!-- 標題 -->
              {{type.title}}
              <!-- 連結 -->
              <a
                :href="type.website"
                target="_blank"
                class="icon"
              >
                <v-btn icon class="ml-2" color="#6AC7E6">
                  <v-icon color="#6AC7E6">
                    mdi-link-variant
                  </v-icon>
                </v-btn>
              </a>
              <a
                :href="type.github"
                target="_blank"
                class="icon"
              >
                <v-btn icon color="#6AC7E6">
                  <v-icon color="#6AC7E6">
                    mdi-github
                  </v-icon>
                </v-btn>
              </a>
            </v-card-title>
            <!-- 內文 -->
            <v-card-text>{{type.text}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- type3：網頁小遊戲 -->
    <v-container class="section">
      <v-row class="justify-center">
        <v-col cols="12" class="type text-center"># 網頁小遊戲</v-col>
        <v-col cols="12" md="4" sm="6" v-for="(type,idx) in type3" :key="idx">
          <v-card class="card">
            <v-img :src="type.img"></v-img>
            <v-card-title>
              <!-- 標題 -->
              {{type.title}}
              <!-- 連結 -->
              <a
                :href="type.website"
                target="_blank"
                class="icon"
              >
                <v-btn icon class="ml-2" color="#6AC7E6">
                  <v-icon color="#6AC7E6">
                    mdi-link-variant
                  </v-icon>
                </v-btn>
              </a>
              <a
                :href="type.github"
                target="_blank"
                class="icon"
              >
                <v-btn icon color="#6AC7E6">
                  <v-icon color="#6AC7E6">
                    mdi-github
                  </v-icon>
                </v-btn>
              </a>
            </v-card-title>
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
        img: require('../assets/web/onepage.jpg'),
        title: '泰山寇汀咖啡莊園',
        text: '用 Bootstrap 搭配 jQuery 外部套件做成含有 RWD 的一頁式介紹網頁。',
        github: 'https://github.com/ya95123/bs-onePage',
        website: 'https://ya95123.github.io/bs-onePage/'
      },
      {
        img: require('../assets/web/garden_black.jpg'),
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
        img: require('../assets/web/catchstar.jpg'),
        title: '捉 星 星！Catch Star',
        text: '使用 jQuery 及 隨機數設定，使星星往不同方向移動做成的小遊戲，並設定最高分即可上榜。',
        github: 'https://github.com/ya95123/game-catchStar',
        website: 'https://ya95123.github.io/game-catchStar/'
      },
      {
        img: require('../assets/web/gotogether.jpg'),
        title: '天堂見 We will see in Heaven',
        text: '使用 JavaScript 搭配其 settimeout 功能做成的類似打地鼠遊戲，另外添上了排行榜功能。',
        github: 'https://github.com/ya95123/game-goTogether',
        website: 'https://ya95123.github.io/game-goTogether/'
      }
    ]
  })
}
</script>
