<template>
  <div class="v-news">
    <template v-if="!isLoading">
      <v-img height="100%" :src="news.imageUrl" :lazy-src="news.imageUrl">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <h1 class="my-4">{{ news.title }}</h1>
      <p class="subtitle-1 mb-2 grey--text text--ligthen-1">
        {{ formatDate(news.publishedAt) }}
      </p>
      <p class="grey--text text--darken-2">{{ news.summary }}</p>
    </template>
  </div>
</template>

<script>
import CommonService from "../services/CommonService";
export default {
  name: "DetailNews",
  data() {
    return {
      news: {},
      isLoading: true,
    };
  },
  mounted() {
    this.getDetailNews();
  },
  methods: {
    async getDetailNews() {
      try {
        const id = this.$route.params.id;
        const { data } = await CommonService.getDetailNews(id);
        this.news = data;
      } catch (err) {
        this.$snotify.error("News Not Found");
        this.$router.push({ name: "home" });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
