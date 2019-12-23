<template>
  <section class="blog-post-detail-container">
    <article>
      <div class="post-header"></div>
      <div class="post-image"></div>
      <div class="post-content">
        <p v-html="selectedPostDetails.content"></p>
      </div>
    </article>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "postDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState(["selectedPostDetails"])
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