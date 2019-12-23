<template>
  <div class="blog-posts-container">
    <list :data-list="this.posts"></list>
    <div class="load-more">
      <button @click="loadOldPost">Older Post</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "posts",

  computed: {
    ...mapState(["posts","nextPage"])
  },
  methods:{
    ...mapActions(["fetchOldPosts"]),
    loadOldPost(){
      this.fetchOldPosts(this.nextPage);
    }
  },
  components: {
    List //tc stands for true caller
  }
};
</script>
<style lang="scss" scoped>
</style>
