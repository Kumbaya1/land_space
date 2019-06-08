<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <div class="side-bar">
        <router-view></router-view>
      </div>
      <div class="map">
        这里放地图组件
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
// @ is an alias to /src

export default {
  components: {
    Header
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
}
.map{
  flex: 1;
  width: 0;
  background: #eee;

}
</style>

