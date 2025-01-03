<script setup>
</script>

<template>
  <section class="booking">
    <h2>Réservations</h2>
    <a href="http://garazikus.free.fr" class="cinemaItem">
      <div class="bookingInfos">
        <h3>Cinéma le Vauban</h3>
        <p>Saint-Jean-Pied-de-Port</p>
      </div>
      <div class="line"></div>
      <div class="timeInfos">
        <h4>Avant-Première</h4>
        <p>25 Janvier - 21h00</p>
      </div>
    </a>
    <p>Plus de projection à venir prochainement ...</p>
  </section>
</template>

<style scoped lang="scss">

.booking {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-family: Syne, sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
  }

  .cinemaItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: #323232;
    transition: all ease 0.3s;
    width: 75vw;
    color: white;

    &:hover {
      background-color: #373737;
    }

    .bookingInfos {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      h3 {
        font-family: Syne, sans-serif;
        font-size: 1.4rem;
        font-weight: 700;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
      }
    }

    .line {
      width: 60%;
      border-bottom: solid 1px #aeaeae;
    }

    .timeInfos {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      text-align: right;

      h4 {
        font-family: Syne, sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
}

@media (max-width: 800px) {

  .booking {
    h2 {
      font-size: 1.5rem;
    }

    .cinemaItem {
      padding: 1rem;
      width: 85vw;

      .bookingInfos {
        h3 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .line {
        width: 50%;
      }

      .timeInfos {
        h4 {
          font-size: 1rem;
        }

        p {
          font-size: 0.8rem;
        }
      }
    }
  }
}

</style>
