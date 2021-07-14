<template>
  <v-card min-height="700" class="c-card">
    <v-img height="250" :src="news.imageUrl" :lazy-src="news.imageUrl">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title class="text--title-news">
      <h1 class="headline">{{ news.title }}</h1>
      <p class="subtitle-1 mb-2 mt-1">
        {{ formatDate(news.publishedAt) }}
      </p>
    </v-card-title>
    <v-card-text class="c-card__text">
      {{ news.summary }}
    </v-card-text>
    <v-container>
      <v-layout align-center justify-space-between class="c-card__action">
        <v-btn color="orange lighten-2" @click="onClick">
          Read More
        </v-btn>
        <p class="caption pb-0 mb-0">Written by: {{ news.newsSite }}</p>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    news: {
      type: Object,
      default: () => {},
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
