<template>
  <div class="wrapper">
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import {Sidebar} from "./components"
export default {
  name: "",
  data: () => ({

  }),
  components: {
    Sidebar
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  position: relative;
  padding-left: 250px;
}
.sidebar{
  position: absolute;
  left: 0;
  top: 0;
  width:250px;
  padding-left: 20px;
  padding-top: 20px;
  background: #fff;
  z-index: 1;
}
.main{
  padding: 20px;
  padding-right: 150px;
}
</style>
