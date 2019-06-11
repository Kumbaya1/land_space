<template>
  <div class="evaluate">
    <div class="left-side-bar">
      <h1>规划辅助编制&gt;&gt;双评价</h1>
      <!-- <el-menu
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
      </el-menu> -->
      <SideBarMenu />
    </div>
    <div class="right-side-bar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import NavMenu from "@/components/SubMenu";
import SideBarMenu from "@/components/SideBarMenu";
export default {
  data() {
    return {
      // headerMenu: [
      //   {
      //     name: "资源环境承载能力评价",
      //     icon: "<i class='iconfont icon-ziyuan'></i>",
      //     children: [
      //       {
      //         name: "数据准备",
      //         path: "/planningcad/evaluation/environment/datapre",
      //         icon: "<i class='el-icon-star-on'></i>"
      //       },
      //       {
      //         name: "要素单项评价",
      //         icon: "<i class='iconfont icon-zheng'></i>",
      //         children: [
      //           {
      //             name: "土地资源评价",
      //             path: "/planningcad/evaluation/environment/individual/landeva",
      //             icon: "<i class='iconfont icon-ling'></i>"
      //           },
      //           {
      //             name: "水资源评价",
      //             path: "/planningcad/evaluation/environment/individual/watereva",
      //             icon: "<i class='iconfont icon-ling'></i>"
      //           },
      //           {
      //             name: "海洋资源评价",
      //             path: "/planningcad/evaluation/environment/individual/seaeva",
      //             icon: "<i class='iconfont icon-ling'></i>"
      //           },
      //           {
      //             name: "环境评价",
      //             path: "/planningcad/evaluation/environment/individual/enveva",
      //             icon: "<i class='iconfont icon-ling'></i>"
      //           },
      //           {
      //             name: "生态评价",
      //             path: "/planningcad/evaluation/environment/individual/ecologyeva",
      //             icon: "<i class='iconfont icon-ling'></i>"
      //           },
      //           {
      //             name: "灾害评价",
      //             path: "/planningcad/evaluation/environment/individual/disaster",
      //             icon: "<i class='iconfont icon-ling'></i>"
      //           }
      //         ]
      //       },
      //       {
      //         name: "集成评价",
      //         path: "/planningcad/evaluation/environment/integrated",
      //         icon: "<i class='iconfont icon-zheng'></i>"
      //       }
      //     ]
      //   },
      //   {
      //     name: "国土空间开发适宜性评价",
      //     path: "/planningcad/evaluation/land",
      //     icon: "<i class='iconfont icon-guotu'></i>"
      //   },
      //   {
      //     name: "综合分析",
      //     path: "/planningcad/evaluation/analysis",
      //     icon: "<i class='iconfont icon-zonghe'></i>"
      //   },
      //   {
      //     name: "文化保护空间评价",
      //     path: "/planningcad/evaluation/protect",
      //     icon: "<i class='iconfont icon-wenhua'></i>"
      //   }
      // ]
    };
  },
  methods: {
    handleSelect(key) {
      //   if (key === "土地资源评价") {
      //     this.$router.push("/evaluate/land");
      //   } else if (key === "水资源评价") {
      //     this.$router.push("/evaluate/water");
      //   }
    }
  },
  computed: {
    sideMenus() {
      return this.$store.state.sideMenus;
    }
  },
  components: {
    SideBarMenu
  }
};
</script>

<style lang="scss">
.evaluate {
  height: 100%;
  display: flex;
}
.left-side-bar {
  width: 240px;
  height: 100%;
  // background: #545c64;
  background: #2c3e50;
}
.evaluate /deep/ .el-menu {
  border-right-color: transparent;
}
.left-side-bar h1 {
  color: #fff;
  padding: 15px 15px;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>