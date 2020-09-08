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
        <v-col cols="12" md="4">
          <v-card>
            <v-img src="../assets/web/onepage.png"></v-img>
            <v-card-title>123</v-card-title>
            <v-card-text>123</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- type3：網頁小遊戲 -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">網頁小遊戲</v-col>
        <v-col cols="12" md="4" v-for="type in type3" :key="type">
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
    type3: [
      { img: require('../assets/web/memoryPoker.png'), title: '記憶 Poker', text: '很適合三五好友相聚時，可以一起玩的小遊戲 😊', site: 'ya95123.github.io/game-memorypoker/' },
      { img: require('../assets/web/catchstar.png'), title: '記憶 Poker', text: '很適合三五好友相聚時，可以一起玩的小遊戲 😊', site: 'ya95123.github.io/game-memorypoker/' },
      { img: require('../assets/web/gotogether.png'), title: '記憶 Poker', text: '很適合三五好友相聚時，可以一起玩的小遊戲 😊', site: 'ya95123.github.io/game-memorypoker/' }
    ]
  })
}
</script>
