<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#2A9A43" dark>
            <v-card-title class="headline">スキルセット</v-card-title>

            <v-card-subtitle>
              開発経験ある言語からない言語まで
              趣味も載せていこうか
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text large @click="$router.push('/')">トップに戻る</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark :href="item.link">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>

                <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
              </div>
              <v-card color="#FFFFFF" class="ma-1">
                <v-icon size="125" color="grey darken-3">{{item.src}}</v-icon>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "mdi-vuejs",
        title: "Vue.js",
        subtitle: "基本はこれ使ってます。",
        link: "https://jp.vuejs.org/v2/guide/"
      },
      {
        color: "#36B1C9",
        src: "mdi-language-go",
        title: "Golang",
        subtitle: "ただいま勉強中",
        link: "https://golang.org/doc/"
      }
    ]
  })
};
</script>

<style>
</style>