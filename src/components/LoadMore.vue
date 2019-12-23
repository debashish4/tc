<template>
  <div class="load-more" :style="{float:align}">
    <button @click="loadOldPost">
      <slot></slot>
    </button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "load_more",
  computed: {
    ...mapState(["nextPage"])
  },
  methods: {
    ...mapActions(["fetchOldPosts"]),
    loadOldPost() {
      this.fetchOldPosts(this.nextPage);
    }
  },
  props:{
      align: String
  }
};
</script>
<style lang="scss">
.load-more {
  margin: 0 20px 20px 20px;
  width: 100px;
  border-bottom: 1px solid black;
  button {
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 5px;
    border-bottom: 1px solid #efefef;
  }
}
</style>