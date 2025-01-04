<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import LegalContent from '@/components/Legals/LegalContent.vue';
</script>

<template>
  <div class="page">
    <Navbar class="navbar" />
    <div class="legalPlacement">
      <LegalContent />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    z-index: 2;
    position: fixed;
    top: 3rem;
  }

  .legalPlacement {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 13rem 0;
  }
}

</style>
