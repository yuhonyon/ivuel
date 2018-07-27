<template>
  <div id="">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import {AppMain,AppHeader,AppFooter} from '../components/layout'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    AppMain,AppHeader,AppFooter
  }
}
</script>
