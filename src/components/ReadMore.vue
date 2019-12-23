<template>
  <div class="read-more" :style="{'justify-content':align}">
    <button @click="navigateToDetailPage(postID)">
      <slot></slot>
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "read_more",
  methods: {
    ...mapActions(["fetchSinglePostDetail"]),
    navigateToDetailPage(postID) {
      this.fetchSinglePostDetail(postID);
      this.$router.push({ name: "postDetail" });
    }
  },
  props: {
    postID: Number,
    align: String
  }
};
</script>
<style lang="scss">
.read-more {
  margin: 50px;
  display: flex;
  button {
    text-align: center;
    text-transform: uppercase; 
    font-weight: bolder;
    background: transparent;
    cursor: pointer;
    border: none;
    font-size: 14px;
    padding: 10px;
    background: black;
    color: #fff;
  }
}
</style>