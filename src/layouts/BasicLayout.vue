<template>
  <div>
    <Header />
    <SiderMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SiderMemu from './SiderMenu'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    // eslint-disable-next-line vue/no-unused-components
    SiderMemu
  }
}
</script>

<style></style>
