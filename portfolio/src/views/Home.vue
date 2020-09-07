<template>
  <div id="home">
    <!-- type1：功能型網站 -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">功能型網站</v-col>
        <v-col cols="12" md="6">
          <v-img src="../../public/img/web/d_hand_guesse.png" class="rounded"></v-img>
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
            <v-img src="../../public/img/web/onepage.png"></v-img>
            <v-card-title>123</v-card-title>
            <v-card-text>123</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- type2：網頁小遊戲 -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">網頁小遊戲</v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-img src="../../public/img/web/onepage.png"></v-img>
            <v-card-title>123</v-card-title>
            <v-card-text>123</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
  })
}
</script>
