<template>
  <div class="related-post-wrap">
    <p>related post 1</p>
    <p>related post 2</p>
    <p>related post 3</p>
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
.related-post-wrap {
}
</style>