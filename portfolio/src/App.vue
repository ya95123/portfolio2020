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
          Alfred Dai 個人作品集
        </v-toolbar-title>

        <v-spacer></v-spacer>

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
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                Contact
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
