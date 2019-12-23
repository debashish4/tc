<template>
  <div id="app">
    <header></header>
    <h1>TrueCaller Blog</h1>
    <div class="container-wrap">
      <main>
        <router-view />
      </main>
      <aside>
        <categories></categories>
        <tags :tag-list="tags"></tags>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { TRUECALLER_POSTS, TRUECALLER_TAGS } from "@/constants/api_constants";
import Categories from "@/views/Categories";
import Tags from "@/components/Tags";
export default {
  data() {
    return {};
  },
  mounted() {
    this.fetchAllPosts(TRUECALLER_POSTS);
    this.fetchAllTags(TRUECALLER_TAGS);
  },
  methods: {
    ...mapActions(["fetchAllPosts", "fetchAllTags"])
  },
  computed: {
    ...mapState(["posts", "tags"])
  },
  components: {
    Categories,
    Tags
  }
};
</script>
<style lang="scss">
#app .container-wrap {
  max-width: 1120px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
}

main {
  min-width: 740px;
  flex-grow: 3;
  flex-basis: 0;
}
</style>
