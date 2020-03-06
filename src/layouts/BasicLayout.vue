<template>
  <div :class="[`nav-theme-${navTheme}`,`nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider 
      v-if="navLayout === 'left'"
      :theme="navTheme"
      :trigger="null"
      collapsible
      v-model="collapsed"
      width="256PX"
    >
      <div class="logo">Ant Design Vue Pro</div>
         <SiderMenu :theme="collapsed"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" 
          :type="collapsed ? 'menu-unfold' : 'menu-fold'" 
          @click="collapsed = !collapsed"></a-icon>
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
            <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
            <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <setting-drawer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu'
import SettingDrawer from '../components/SettingDrawer/index'
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    // eslint-disable-next-line vue/no-unused-components
    SiderMenu,

    SettingDrawer
  }
}
</script>

<style scoped>
.trigger {
    padding: 0 20px;
    height: 64px;
    font-size: 20px;
}
.trigger:hover {
  background: #eeeeee
}
.logo{
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo {
  color: #ffffff;
}
</style>
