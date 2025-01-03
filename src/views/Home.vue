<script setup>
import Navbar from '@/components/Navbar.vue';
import VideoLanding from '@/components/Home/VideoLanding.vue';
import Programmation from '@/components/Home/Programmation.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <div class="home">
    <Navbar class="navbar" />
    <VideoLanding />
    <Programmation />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20vh;

  .navbar {
    z-index: 2;
    position: fixed;
    top: 3rem;
  }
}

</style>
