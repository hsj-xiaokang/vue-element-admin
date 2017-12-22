<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container" style="top: 3.2% !important;"></sidebar>
    <div class="nv" style="width: 100%;height: 45px;background-color: rgb(48,65,86)">
        <div style="margin-top: 0.5%;margin-left: 2%;color: white;">
          <div class="denglu" style="display: inline-block">
            <img style="width: 30px;height: 30px" src="favicon.ico"/>
            <a href="#">公司通用管理平台</a>
          </div>
          <div style="float: right;margin-right: 2%;margin-top: 0%;display: inline-block">
            <div class="denglu" style="display: inline-block"  @click='click'>
              <img style="width: 30px;height: 30px" src="favicon.ico"/>
              <a href="#">全屏</a>
            </div>
            <div class="denglu" style="display: inline-block">
              <img style="width: 30px;height: 30px" src="favicon.ico"/>
              <el-dropdown trigger="click" class='international' style="margin-top: 5.5%" @command="handleSetLanguage">
                <div style="color: white">
                  <svg-icon class-name='right-menu-item international-icon' icon-class="language" />
                  语言<i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
                  <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="denglu" style="display: inline-block">
              <img style="width: 30px;height: 30px" src="favicon.ico"/>
              <a href="#">个人中心</a>
            </div>
            <div class="denglu" style="display: inline-block">
              <img style="width: 30px;height: 30px" src="favicon.ico"/>
              <a href="#">退出</a>
            </div>
          </div>
        </div>
    </div>
      <div class="main-container" style="margin-top: 3.5%">
        <navbar></navbar>
        <tags-view></tags-view>
        <app-main></app-main>
      </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain, TagsView } from './components'
import screenfull from 'screenfull'
import ThemePicker from '@/components/ThemePicker'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    ThemePicker
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'language',
      'errorLogs'
    ])
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// 为了重新实例化vue-router对象 避免bug
      })
    },
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
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
    /*height: 100%;*/
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
  }

  .denglu *{
    vertical-align:middle; /* 居中对齐， */
    font-size:14px;
  }
</style>
