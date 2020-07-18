<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header style="width:100%">
          <el-button @click="isOpenMenu">展开</el-button>Header
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar";

export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    isOpenMenu() {
      this.$store.commit("isCollapse");
    }
  },
  components: {
    sideBar
  }
};
</script>

<style scoped>
</style>
