<template>
  <div class="app-wrapper" >
    <nav-bar></nav-bar>
    <div class="main-container">
      <menu-bar class="menubar-container"></menu-bar>
      <app-main  class="app-main"></app-main>
    </div>
  </div>
</template>

<script>
import { NavBar, MenuBar, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    NavBar,
    MenuBar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  height: 100%;
  .menubar-container{
    width: 180px;
    background: #4a5064;
    color: #fff;
    float: left;
  }
  .app-main{
    width: calc(100% - 180px);
    float: right;
  }
}
</style>
