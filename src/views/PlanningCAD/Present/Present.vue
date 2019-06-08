<template>
  <div class="present">
    <h1>规划辅助编制&gt;&gt;现状分析</h1>
    <el-menu
      class="el-menu-demo"
      mode="vertical"
      background-color="#2c3e50"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="this.$route.path"
      :router="true"
    >
      <NavMenu :navMenus="headerMenu"></NavMenu>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/SubMenu";
export default {
  data() {
    return {
      headerMenu: [
        {
          name: "自然资源分析",
          path: "/planningcad/present/analysis",
          icon: "<i class='el-icon-star-on'></i>"
        },
        {
          name: "国土空间保护",
          path: "/planningcad/present/protect",
          icon: "<i class='el-icon-star-on'></i>"
        },
        {
          name: "国土空间开发",
          path: "/planningcad/present/development",
          icon: "<i class='el-icon-star-on'></i>"
        },
        {
          name: "城市运行情况",
          path: "/planningcad/present/running",
          icon: "<i class='el-icon-star-on'></i>"
        }
      ]
    };
  },
  components: {
    NavMenu
  }
};
</script>

<style lang="scss" scoped>
.present {
  width: 240px;
  height: 100%;
  // background: #545c64;
  background: #2c3e50;
}
.present /deep/ .el-menu {
  border-right-color: transparent;
}
.present h1 {
  color: #fff;
  padding: 15px 15px;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>