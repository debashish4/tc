  <template>
  <section id="list">
    <article class="blog-post" :key="data.ID" v-for="data in dataList">
      <post-header
        :post-date="data.date"
        :post-title="data.title"
        :author-first="data.author ? data.author.first_name: ''"
        :author-second="data.author ? data.author.last_name: ''"
        :update-time="60"
      ></post-header>
      <div class="post-image-wrap">
        <div class="post-image-meta"></div>
        <a class="post-image-link" href="#">
          <img class="post-image-thumb" :src="data.featured_image" alt="alt text" />
        </a>
      </div>
      <div class="post-content-wrap">
        <div class="post-content">
          <p class="post-excerpt" v-html="data.excerpt"></p>
          <read-more align="center" :post-ID="data.ID">Continue Reading</read-more>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import PostHeader from "./PostHeader";
import ReadMore from "./ReadMore";
export default {
  name: "List",
  data() {
    return {};
  },
  components: {
    PostHeader,
    ReadMore
  },
  props: {
    msg: String,
    dataList: Array
  }
};
</script>
<style lang="scss">
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
}
</style>