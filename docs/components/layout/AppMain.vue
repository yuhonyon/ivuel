<template>
  <div class="app-main">
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
