<template>
  <div class="header">
    <div class="logo">国土空间规划监测评估预警管理系统</div>
    <div class="nav">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        active-text-color="#ffd04b"
        @select="handleSelect"
        :default-active="this.$route.path"
        :router="true"
      >
        <template v-for="menu in headMenus">
          <el-menu-item :index="menu.path" v-if="!menu.children" :key="menu.path">{{menu.name}}</el-menu-item>
          <el-submenu v-else :key="menu.name" :index="menu.name">
            <template slot="title">{{menu.name}}</template>
            <el-menu-item
              :index="sub.path"
              v-for="(sub) in menu.children"
              :key="sub.path"
            >{{sub.name}}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="admin">后台管理</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // headerMenu: [
      //   {
      //     name: "一张图",
      //     path: "/onepicture",
      //     icon: ""
      //   },
      //   {
      //     name: "规划辅助编制",
      //     children: [
      //       {
      //         name: "现状分析",
      //         path: "/planningcad/present",
      //         icon: ""
      //       },
      //       {
      //         name: "双评价",
      //         path: "/planningcad/evaluation",
      //         icon: ""
      //       },
      //       {
      //         name: "三区三线划定",
      //         path: "/planningcad/delimitation",
      //         icon: ""
      //       },
      //       {
      //         name: "发展预测",
      //         path: "/planningcad/forecast",
      //         icon: ""
      //       },
      //       {
      //         name: "要素配置",
      //         path: "/planningcad/factor",
      //         icon: ""
      //       }
      //     ]
      //   },
      //   {
      //     name: "规划辅助审查",
      //     path: "/review",
      //     icon: ""
      //   },
      //   {
      //     name: "用途管制",
      //     path: "/usage",
      //     icon: ""
      //   },
      //   {
      //     name: "监测评估预警",
      //     path: "/monitoring",
      //     icon: ""
      //   },
      //   {
      //     name: "公众服务",
      //     path: "/service",
      //     icon: ""
      //   }
      // ]
    };
  },
  methods: {
    handleSelect(key) {
      //   this.$router.push(key);
      //   if (key === "现状分析") {
      //     this.$router.push("/present");
      //   } else if (key === "双评价") {
      //     this.$router.push("/evaluate");
      //   }
    }
  },
  computed: {
    headMenus() {
      return this.$store.state.headMenus;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background: url(../assets/images/bg.png) no-repeat;
  background-size: 100% 100%;
  height: 60px;
}
.logo {
  color: #fff;
  text-indent: 2em;
  flex: 1;
  font-size: 22px;
}
.header /deep/ .el-menu {
  background: rgba($color: #000000, $alpha: 0.4);
  color: #fff;
}
.header /deep/ .el-menu--horizontal > .el-menu-item {
  color: #ccc;
}
.header /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #ccc;
}
.header /deep/ .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  // background: rgba($color: #000000, $alpha: 0.7);
  background: transparent;
  color: #fff;
}
.header /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: transparent;
}
.header /deep/ .el-menu--horizontal > .el-menu-item,
.header /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  line-height: 40px;
  height: 40px;
}
.header /deep/ .el-menu.el-menu--horizontal {
  border-bottom-color: transparent;
}
.header /deep/ .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
  background: transparent;
}
.admin {
  width: 2em;
  color: #9b9b9b;
  font-size: 12px;
  margin-right: 15px;
  cursor: pointer;
  margin-left: 5px;
}
.admin:hover {
  color: #fff;
}
</style>