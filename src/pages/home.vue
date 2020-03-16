<template>
  <v-card class="mx-auto" max-width="500" max-height="1000" height="800">
    <v-container grid-list-xs>
      <v-layout justify-space-around wrap>
        <v-flex xs12 class="text-center mt-10">
          <v-avatar max-height="300" max-width="300" min-height="100" min-width="100" size="300">
            <img src="../assets/Screenshot_20191213-020736(1).png" alt="Takeroid" />
          </v-avatar>
        </v-flex>
        <v-flex xs12 class="mb-5">
          <h1 class="font-weight-bold text-center">Takeroid</h1>
        </v-flex>
        <v-flex xl4 lg4 md4 sm4 xs4 class="text-right">
          <v-icon size="100" class="ma-3" color="blue" @click="link1">mdi-twitter</v-icon>
        </v-flex>
        <v-flex xl4 lg4 md4 sm4 xs4 class="text-center">
          <v-icon size="100" class="ma-3" color="red" @click="link2">mdi-youtube</v-icon>
        </v-flex>
        <v-flex xl4 lg4 md4 sm4 xs4 class="text-left">
          <v-icon size="100" class="ma-3" color="orange" @click="link3">mdi-github-circle</v-icon>
        </v-flex>
        <v-flex xl7 lg7 md7 sm7 xs7>
          <p class="text-center">人生一週目</p>
          <p>フロントエンドエンジニアです。バックエンドもできるようになりたいなー</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  methods: {
    //妥協
    link1: () => {
      window.location = "https://twitter.com/takenokoroid";
    },
    link2: () => {
      window.location =
        "https://www.youtube.com/channel/UC2YQR0zkHGi68HCMybCoHpw";
    },
    link3: () => {
      window.location = "https://github.com/takenokoroid/";
    }
  }
};
</script>

<style>
.center {
  text-align: center;
}
.bold {
  font-weight: bold;
}
</style>
