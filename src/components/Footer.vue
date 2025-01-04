<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footerTop">
      <div class="footerColumn">
        <img src="@/assets/logo/fractures.svg" alt="White paraleclypse logo">
        <p>
          Une experience proposé par <a href="https://paraleclypse.com">Paraleclypse</a>.
        </p>
        <div class="socials">
          <a href="https://instagram.com/paraleclypse" target="_blank">
            instagram
          </a>
          <a href="https://linkedin.com/paraleclypse" target="_blank">
            linkedin
          </a>
        </div>
      </div>
      <div class="footerMenu">
        <h3>Navigation</h3>
        <div>
          <a href="/">Séances Fractures</a>
          <a href="#programmation">Programmation</a>
          <a href="#description">À Propos</a>
        </div>
      </div>
      <div class="footerMenu">
        <h3>Politiques</h3>
        <div>
          <router-link to="/privacy">Politique de confidentialité</router-link>
          <router-link to="/legal">Mentions légales</router-link>
        </div>
      </div>
    </div>
    <div id="footerLine" class="line"></div>
    <div class="footerBottom">
      <p>
        © Paraleclypse SAS - Tous droits réservés - 2025
      </p>
      <a id="footerToTopButton"
         href="#">
        Retourner en haut
        <img src="@/assets/icons/up-arrow.png" alt="Up arrow">
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  border-radius: 35px;
  margin-bottom: 3rem;
  border: 1px solid gray;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari */

  .footerTop {
    display: flex;
    justify-content: space-between;
    width: 70%;
    padding: 3rem 0;
    height: fit-content;

    .footerColumn {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 33%;

      a {
        color: white;

        &:hover {
          color: #f01313;
          text-decoration: underline;
        }
      }

      .socials {
        display: flex;
        gap: 1rem;
        text-transform: uppercase;
        padding-top: 1rem;
      }

      img {
        width: 180px;
      }

      p {
        line-height: 25px;
        font-size: 14px;
        color: white;
      }
    }

    .footerMenu {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 20%;

      h3 {
        color: white;
        font-size: 20px;
        font-family: Syne, sans-serif;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      a {
        color: white;
        font-size: 16px;
        transition: all ease 0.1s;

        &:hover {
          color: #bebebe;
        }
      }
    }
  }

  .footerBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    padding: 2rem 0;

    p {
      color: white;
    }

    #footerToTopButton {
      position: relative;
      color: white;
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      transition: .3s;

      &:hover {
        transform: translateY(-10px);
        text-shadow: white 2px 0 15px;
      }

      img {
        width: 8%;
      }
    }
  }
}

@media (max-width: 800px) {

  .footer {
    width: 85%;

    .footerTop {
      flex-direction: column;
      gap: 2rem;
      width: 80%;

      .footerColumn {
        width: 100%;
        align-items: center;
        text-align: center;

        img {
          width: 165px;
        }

        p {
          font-size: 14px;
          line-height: 20px;
        }
      }

      .footerMenu {
        width: fit-content;

        h3 {
          font-size: 18px;
        }

        a {
          font-size: 14px;
        }
      }
    }

    .footerBottom {
      width: 70%;
      text-align: center;
      padding-top: 0;

      p {
        font-size: 14px;
      }

      #footerToTopButton {
        display: none;
      }
    }
  }
}

</style>
