<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		  <sidebar class="sidebar-container" style="top: 3.5% !important;"></sidebar>
      <navbar class="nv"></navbar>
      <!--<breadcrumb class="breadcrumb-container"></breadcrumb>-->
      <div class="main-container">
        <!--<navbar></navbar>-->
        <!--<tags-view></tags-view>-->
        <app-main></app-main>
      </div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.app-wrapper {
	  @include clearfix;
	  position: relative;
	  height: 100%;
	  width: 100%;
	}
  .nv{
    -webkit-transition: width 0.28s;
    transition: width 0.28s;
    width: 100% !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
  }

</style>
