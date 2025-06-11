<template>
  <div>
    <Navbar v-if="showLayoutParts"/>

    <NuxtPage/>   
    
    <Footer v-if="showLayoutParts"/>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default{
  components: {Navbar,Footer},
  data(){
return{

}
  },

  computed: {
    showLayoutParts(){
        return this.$route.meta.topbar_sidebar_hide !== false;
      }
  }
}

</script>