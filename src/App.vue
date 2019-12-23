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
      </aside>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { TRUECALLER_POSTS } from "@/constants/api_constants";
import Categories from "@/views/Categories"
export default {
  data() {
    return {};
  },
  mounted() {
    this.fetchAllPosts(TRUECALLER_POSTS);
  },
  methods: {
    ...mapActions(["fetchAllPosts"])
  },
  computed: {
    ...mapState(["posts"])
  },
  components:{
    Categories
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
