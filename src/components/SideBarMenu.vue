<template>
  <div class="side-bar-menu">
    <el-menu
      class="el-menu-demo"
      mode="vertical"
      background-color="#2c3e50"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      @select="handleSelect"
      :default-active="this.$route.path"
      :router="true"
    >
      <NavMenu :navMenus="sideMenus"></NavMenu>
    </el-menu>
  </div>
</template>

<script>
import NavMenu from "@/components/SubMenu";

export default {
  methods: {
    handleSelect() {}
  },
  computed: {
    sideMenus() {
      return this.$store.state.sideMenus;
    }
  },
  components: {
    NavMenu
  }
};
</script>

<style lang="scss" scoped>
</style>