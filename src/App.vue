<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dense dark app>
      <v-toolbar-title>
        <v-btn text large @click="$router.push('/')">
          <span>TAKEROID</span>
          <span>PORTFOLIO</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text large @click="$router.push('/skills')">
        <span>SKILL</span>
      </v-btn>
      <v-btn text large @click="$router.push('/works')">
        <span>WORKS</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
</style>
