<template>
  <div>
    <template v-for="menu in navMenus">
      <el-menu-item :index="menu.path || menu.name" v-if="!menu.children" :key="menu.name">
        <span v-if="menu.icon" v-html="menu.icon" class="span-i"></span>
        {{menu.name}}
      </el-menu-item>
      <el-submenu v-else :key="menu.name" :index="menu.path|| menu.name">
        <template slot="title">
          <span v-if="menu.icon" v-html="menu.icon" class="span-i"></span>
          {{menu.name}}
        </template>
        <!-- <el-menu-item :index="sub.name" v-for="(sub) in menu.children" :key="sub.name">{{sub.name}}</el-menu-item> -->
        <NavMenu :navMenus="menu.children"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    navMenus: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.span-i /deep/ i {
  vertical-align: middle;
  margin-right: 5px;
}
</style>