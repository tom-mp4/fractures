<script setup>
</script>

<template>
  <div class="navbar">
    <img class="logo" src="@/assets/logo/fractures.svg" alt="CMJ Logo" />
    <div class="navbar-menu">
      <router-link class="button" to="/">
        Programation
      </router-link>
      <router-link class="button" to="/">
        À Propos
      </router-link>
      <router-link class="cta" to="/">
        Réserver un Place
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3rem;
  width: 70%;
  border-radius: 100px;
  border: 1px solid gray;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari */

  .logo {
    width: 10rem;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    .button {
      position: relative;
      color: white;
      text-decoration: none;
      transition: color .2s;

      &::after {
        content: '';

        position: absolute;
        width: 100%;
        height: 1px;
        background: white;

        left: 0;
        bottom: 0;

        transition: transform .2s;
        transform-origin: right;
        transform: scaleX(0);
      }

      &:hover {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }

    .cta {
      background-color: black;
      color: white;
      text-decoration: none;
      padding: 0.8em 1.2em;
      border-radius: 10px;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: #1e1e1e;
        color: white;
      }
    }
  }
}

</style>
