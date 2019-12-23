<template>
  <div class="blog-posts-container">
    <list :data-list="this.posts"></list>
    <load-more align="right">
      Older Post
    </load-more>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";
import LoadMore from "@/components/LoadMore.vue";
import { mapState } from "vuex";

export default {
  name: "posts",

  computed: {
    ...mapState(["posts"])
  },
  components: {
    List,
    LoadMore
  }
};
</script>
<style lang="scss" scoped>
</style>
