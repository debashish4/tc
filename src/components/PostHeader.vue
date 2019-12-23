<template>
  <div class="post-header-wrap">
    <h2 class="post-title">
      <a href="#">{{postTitle}}</a>
    </h2>
    <div class="post-meta">
      <span class="post-date-author">
        {{authorFirst}} {{authorSecond}} /
        <timeago :datetime="postDate" :auto-update="updateTime"></timeago>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    postDate: String,
    postTitle: String,
    authorFirst: String,
    authorSecond: String,
    updateTime: Number
  }
};
</script>
<style lang="scss" scoped>
.post-header-wrap {
  .post-title {
    text-align: center;
    text-transform: uppercase;
    margin-block-start: 0;
    margin-block-end: 0;
    a {
      color: black;
    }
  }
  .post-meta {
    text-align: center;
    margin-bottom: 25px;
    span {
      color: #9a9a9a;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
}
</style>