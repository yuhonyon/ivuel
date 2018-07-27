<template>
  <div class="doc-components-sidebar">
    <Menu active-name="1" style="width:100%;" router >
      <h3>开发指南</h3>
      <MenuItem name="1"><Icon type="ios-star"></Icon><span>安装</span></MenuItem>
      <MenuItem name="2"><Icon type="ios-star"></Icon><span>快速上手</span></MenuItem>
      <MenuItem name="3"><Icon type="ios-star"></Icon><span>国际化</span></MenuItem>
      <MenuItem name="4"><Icon type="ios-star"></Icon><span>自定义主题</span></MenuItem>
      <h3>组件</h3>
      <MenuGroup v-for="(group,index) in components" :key="index" title="Basic">
          <MenuItem v-for="item in group" :key="item.path" :tooltip="item.name.zh" :name="`/components/${item.path}`"><Icon :type="item.icon"></Icon><span>{{item.name.zh}}</span></MenuItem>
      </MenuGroup>



    </Menu>
  </div>
</template>
<script>
    import components from "#/router/components"
    export default {
        data () {
            return {
                components: components
            }
        }
    }
</script>
<style lang="less">
.doc-components-sidebar .ivu-menu-collapse{
  >h3{
    display: none;
  }
}
</style>
