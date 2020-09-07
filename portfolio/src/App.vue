<template>
  <vue-scroll>
    <v-app
      id="app"
    >
      <v-app-bar
        id="navbar"
        color="transparent"
        fixed
        flat
        app
      >
        <v-toolbar-title>
          <strong>Alfred Dai 個人作品集</strong>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div
          id="list"
        >
          <router-link class="router" to="/">
            <v-icon class="list-icon">mdi-code-tags</v-icon>
            網頁設計
          </router-link>
          <router-link class="router" to="/about">
            <v-icon class="list-icon">mdi-feather</v-icon>
            圖文設計
          </router-link>
        </div>

        <v-app-bar-nav-icon
          id="ham"
          @click.stop="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        hide-overlay
        right
      >
        <v-list dense>
          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-code-tags</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                網頁設計
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-action>
              <v-icon>mdi-feather</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                圖文設計
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-footer
        id="footer"
        color="transparent"
        app
      >
        <v-spacer></v-spacer>

        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>

      <router-view/>
    </v-app>
  </vue-scroll>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  })
}
</script>
