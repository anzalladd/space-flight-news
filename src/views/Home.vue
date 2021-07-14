<template>
  <div class="v-home">
    <h1>Home</h1>
    <NewsCardSkeleton v-if="isLoading" />
    <template v-else>
      <v-row class="mt-5">
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="news in listNews"
          :key="news.id"
          elevation="2"
        >
          <NewsCard :news="news" :onClick="() => onClickDetailNews(news.id)" />
        </v-col>
      </v-row>
    </template>
    <v-pagination
      v-model="currentPage"
      :length="maxCount"
      :total-visible="7"
      class="py-6"
    ></v-pagination>
  </div>
</template>
<script>
import CommonService from "../services/CommonService";
import NewsCard from "../components/NewsCard.vue";
import NewsCardSkeleton from "../components/NewsCardSkeleton.vue";

export default {
  name: "Home",
  components: {
    NewsCard,
    NewsCardSkeleton,
  },
  data() {
    return {
      listNews: [],
      isLoading: true,
      currentLimit: 6,
      currentPage: 1,
      maxCount: 0,
    };
  },
  mounted() {
    this.getAllNews();
  },
  methods: {
    async getAllNews() {
      try {
        let currentQuery = {
          ...this.$route.query,
        };
        if (currentQuery._page) {
          this.currentPage = parseInt(currentQuery._page);
        }
        this.isLoading = true;
        const start = this.currentLimit * this.currentPage - this.currentLimit;
        const { data } = await CommonService.getAllNews(
          this.currentLimit,
          start
        );
        this.getCountNews();
        this.listNews = data;
        this.isLoading = false;
      } catch (error) {
        this.$snotify.error(error.response.data.message);
      }
    },

    async getCountNews() {
      try {
        const { data } = await CommonService.getCountNews();
        this.maxCount = data;
      } catch (error) {
        this.$snotify.error(error.response.data.message);
      }
    },

    onClickDetailNews(id) {
      this.$router.push({ name: "detailNews", params: { id } });
    },
  },
  watch: {
    currentPage() {
      this.$router.push({
        name: "home",
        query: {
          _page: this.currentPage,
        },
      });
      this.getAllNews();
    },
  },
};
</script>
