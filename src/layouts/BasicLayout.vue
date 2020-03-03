<template>
  <div>
    <Header />
    <SiderMenu />
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    // eslint-disable-next-line vue/no-unused-components
    SiderMenu
  }
}
</script>

<style></style>
