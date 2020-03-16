<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#2A9A43" dark>
            <v-card-title class="headline">いままで開発したもの</v-card-title>

            <v-card-subtitle>バグ放置、UI未整理などなど見にくいモノばかり。ご容赦を...</v-card-subtitle>

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

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
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
        src: require("../assets/ioroiFridge.png"),
        title: "IoroiFridge",
        subtitle:
          "あんな悲劇はもう繰り返さない...\n表示されない場合更新入れてみてください",
        link: "https://takenokoroid.github.io/ioroifridge/"
      },
      {
        color: "#36B1C9",
        src: require("../assets/HoCTools.png"),
        title: "Heart of Crown点数計算ツール",
        subtitle: "どうなってんだ！このUIッ！ﾊｲｽﾐﾏｾﾝ...",
        link: "https://takenokoroid.github.io/controlhoc/"
      }
    ]
  })
};
</script>