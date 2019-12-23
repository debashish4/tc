<template>
  <div class="categories-list-container">
    <h3 class="category-header">CATEGORIES</h3>
    <div class="categories" :key="category.ID" v-for="category in categories">
      <button @click="goToAllPosts(category.name)">
        <span>{{category.name}}</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { TRUECALLER_CATEGORIES } from "@/constants/api_constants";
export default {
  name: "categories",
  data() {
    return {};
  },
  mounted() {
    this.fetchCategories(TRUECALLER_CATEGORIES);
  },
  methods: {
    ...mapActions(["fetchCategories", "fetchPostsByCategory"]),
    goToAllPosts(catName) {
      this.fetchPostsByCategory(catName);
      this.$router.push({ name: "posts" }).catch(err => {
        return err;
      });
    }
  },
  computed: {
    ...mapState(["categories"])
  }
};
</script>
<style lang="scss" scoped>
.categories-list-container {
  margin: 20px;
  min-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  .category-header {
    text-transform: uppercase;
    font-weight: bolder;
    color: #fff;
    padding: 10px 20px;
    background: #0f273a;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .categories {
    background: #fff;
    border-bottom: 1px solid #f3f3f3;
    text-transform: uppercase;
    button {
      font-size: 16px;
      font-weight: bolder;
      background: transparent;
      border: none;
      width: 100%;
      height: 100%;
      padding: 15px 20px;
      text-align: left;
      position: relative;
      left: 0;
      transition: left 200ms ease;
      &:hover {
        left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>  
