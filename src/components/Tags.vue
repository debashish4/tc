<template>
  <div class="tags-container">
    <h3 class="tags-header">POPULAR TAGS</h3>
    <div class="tags">
      <span class="tag" @click="goToAllPosts(tag.name)" :key="tag.ID" v-for="tag in tagList">
        <span>{{tag.name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchPostsByTag"]),
    goToAllPosts(tagName) {
      this.fetchPostsByTag(tagName);
      this.$router.push({ name: "posts" }).catch(err => {
        return err;
      });
    }
  },
  props: {
    tagList: Array
  }
};
</script>
<style lang="scss">
.tags-container {
  margin: 20px;
  min-width: 300px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  .tags-header {
    text-transform: uppercase;
    font-weight: bolder;
    color: #fff;
    padding: 10px 20px;
    background: #0f273a;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
  }
  .tags {
    padding: 15px 20px;
    .tag {
      color: #fff;
      cursor: pointer;
      background: #000000;
      margin: 5px;
      padding:5px;
      border-radius: 4px;
      font-size: 14px;
      display: inline-block;
    }
  }
}
</style>