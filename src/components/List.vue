<template>
  <section id="list">
    <article class="blog-post" :key="data.ID" v-for="data in dataList">
      <div class="post-header-wrap">
        <h2 class="post-title">
          <a href="#">{{data.title}}</a>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a :href="data.URL" target="_blank" title="Sora Blogging Tips">Sora Blogging Tips</a>
          </span>
        </div>
      </div>
      <div class="post-image-wrap">
        <div class="post-image-meta"></div>
        <a class="post-image-link" href="#">
          <img class="post-image-thumb" :src="data.featured_image" alt="alt text" />
        </a>
      </div>
      <div class="post-content-wrap">
        <div class="post-content">
          <p class="post-excerpt" v-html="data.excerpt"></p>
          <button @click="navigateToDetailPage(data.ID)">Read more</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "List",
  data() {
    return {};
  },
  methods: {
      ...mapActions(["fetchSinglePostDetail"]),
    navigateToDetailPage(postID) {
      this.fetchSinglePostDetail(postID);
       this.$router.push({name: "postDetail"});
    }
  },
  props: {
    msg: String,
    dataList: Array
  }
};
</script>
<style lang="scss" scoped>
.blog-post {
  background-color: #fff;
  border-radius: 1px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  margin-bottom: 60px;
  padding: 30px 30px 1px 30px;
  overflow: hidden;

  .post-image-wrap {
    .post-image-thumb {
      width: 100%;
    }
  }

  .post-content-wrap {
    .post-excerpt {
    }
  }
}
</style>