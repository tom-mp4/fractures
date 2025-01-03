<script setup>
import Navbar from '@/components/Navbar.vue';
import VideoLanding from '@/components/Home/VideoLanding.vue';
import Programmation from '@/components/Home/Programmation.vue';
import Footer from '@/components/Footer.vue';
import FracturesDescription from '@/components/Home/FracturesDescription.vue';
import Trailer from '@/components/Home/Trailer.vue';
import Booking from '@/components/Home/Booking.vue';

</script>

<template>
  <div class="home">
    <Navbar class="navbar" />
    <VideoLanding />
    <Programmation id="programmation" />
    <div class="line"></div>
    <FracturesDescription id="description" />
    <Trailer />
    <div class="line"></div>
    <Booking id="booking" />
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

  .line {
    width: 90%;
    height: 1px;
    background-color: #aeaeae;
  }
}

@media (max-width: 800px) {

  .home .navbar {
    top: 1.5rem;
  }
}

</style>
