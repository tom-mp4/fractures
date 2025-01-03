<script setup>
</script>

<template>
  <div class="navbar">
    <img class="logo" src="@/assets/logo/fractures.svg" alt="CMJ Logo" />
    <div class="navbar-menu">
      <a class="button" href="#programmation">
        Programmation
      </a>
      <a class="button" href="#description">
        À Propos
      </a>
      <a class="cta" href="#booking">
        Réserver un Place
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.8rem 0.8rem 3rem;
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
      border-radius: 100px;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: #1e1e1e;
        color: white;
      }
    }
  }
}

@media (max-width: 800px) {

  .navbar {
    padding: 0.6rem 0.6rem 0.6rem 1.3rem;
    width: 85%;
    border-radius: 100px;
    border: 1px solid gray;

    .logo {
      width: 9rem;
    }

    .navbar-menu {
      .button {
        display: none;
      }

      .cta {
        padding: 0.6em 1em;
        font-size: 14px;
      }
    }
  }

}

</style>
