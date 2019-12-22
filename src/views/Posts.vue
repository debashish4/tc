<template>
  <div class="blog-posts-container">
    <list :data-list="this.posts"></list>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";
import { mapState } from "vuex";

export default {
  name: "posts",

  computed: {
    ...mapState(["posts"])
  },
  components: {
    List //tc stands for true caller
  }
};
</script>
<style lang="scss" scoped>
</style>
