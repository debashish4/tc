<template>
  <section class="blog-post-detail-container">
    <article>
      <post-header
        :post-date="selectedPostDetails.date"
        :post-title="selectedPostDetails.title"
        :author-first="selectedPostDetails.author ? selectedPostDetails.author.first_name: ''"
        :author-second="selectedPostDetails.author ? selectedPostDetails.author.last_name: ''"
        :update-time="60"
      ></post-header>
      <div class="post-content">
        <img :src="selectedPostDetails.guid" alt="image" />
        <p v-html="selectedPostDetails.content"></p>
      </div>
    </article>
    <related-posts></related-posts>
  </section>
</template>
<script>
import { mapState } from "vuex";
import PostHeader from "@/components/PostHeader.vue";
import RelatedPosts from "@/components/RelatedPosts.vue";
export default {
  name: "postDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState(["selectedPostDetails"])
  },
  components: {
    PostHeader,
    RelatedPosts
  }
};
</script>
<style lang="scss">
.blog-post-detail-container {
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  img {
    max-width: 100%;
  }
  .post-content {
    background: #fff;
  }
}
</style>