<template>
  <nav id="nav" class="navbar">
    <div class="navbar-container flex align-center space-between">
      <img src="../assets/imgs/logo.png" alt="" />
      <svg
        @click="toggleMenu()"
        class="cursor-pointer phone-view"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg>
      <div class="main-nav-container" :class="{ hide: !isShowMenu }">
        <ul :class="navbarLayout">
          <a @click="toggleMenu(true)" href="#about"><li>About</li></a>
          <a @click="toggleMenu(true)" href="#projects"><li>Projects</li></a>
          <a @click="toggleMenu(true)" href="#contact"><li>Contact</li></a>
        </ul>
      </div>
    </div>
    <div  @click="toggleMenu()">
      <black-screen style="zIndex: 2" v-if="isShowMenu === true"></black-screen>
    </div>
  </nav>
</template>

<script>
import BlackScreen from '@/components/BlackScreen';
export default {
  data() {
    return {
      isShowMenu: false,
      windowSize: true,
    };
  },
  created() {
    // window.addEventListener('resize', function(){
    //   if(screen.width>750) this.windowSize = true
    //   else this.windowSize = false
    //   console.log(this.windowSize)
    // })
  },
  methods: {
    toggleMenu(isMobile = false) {
      if(isMobile) {
        this.isShowMenu=false
        return
        }
      this.isShowMenu = !this.isShowMenu;
    },
  },
  components: {
    BlackScreen,
  },
  computed: {
    navbarLayout() {
      return !this.windowSize
        ? 'main-nav-container clean-list column-layout mobile-links'
        : 'main-nav-container clean-list';
      // return  'main-nav-container clean-list';
    },
  },
};
</script>

<style>
</style>