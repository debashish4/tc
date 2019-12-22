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
          <router-link to="post_detail">Read more</router-link>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "List",
  data() {
    return {};
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


  .post-image-wrap{
      .post-image-thumb{
          width:100%;
      }
  }

  .post-content-wrap{
      .post-excerpt{
     
      }
  }
}

// .blog-post {
//   display: flex;
//   margin-bottom: 20px;
//   .post-image-wrap {
//     width: 312px;
//     height: 195px;
//     margin: 0 20px 0 0;
//     flex-shrink: 0;
//     .post-image-link {
//       display: inline-block;
//     }
//     .post-image-thumb {
//       width: 100%;
//       border-radius: 10px;
//     }
//   }

//   .post-content-wrap {
//     .post-title {
//       margin-block-start: 0;
//       margin-block-end: 0;
//     }
//     .read-more {
//       display: inline-block;
//       background-color: #007dcc;
//       color: #fff;
//       height: 28px;
//       font-size: 13px;
//       font-weight: 600;
//       line-height: 28px;
//       padding: 0 15px;
//       margin: 12px 0 0;
//       border-radius: 2px;
//       transition: background 0.17s ease;
//       &:hover {
//         background: #0b6ba6;
//       }
//     }
//   }
// }
</style>