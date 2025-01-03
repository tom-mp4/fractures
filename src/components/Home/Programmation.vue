<script setup>

</script>

<template>
  <div class="programming">
    <div class="programmingDescription">
      <h2>Programmation</h2>
      <div class="aboutProgrammingDescription">
        <h3>sexualités & représentations</h3>
        <p>
          Explorer les sexualités et leurs représentations, c'est questionner les normes,
          déconstruire les tabous et refléter la diversité des expériences humaines.
          Ce thème permet de donner la parole à des identités souvent invisibilisées,
          tout en ouvrant des perspectives nouvelles sur l'intimité, le désir et l'identité.
        </p>
      </div>
    </div>
    <div class="movieGrid">
      <a href="" class="moviePoster">
        <img src="@/assets/posters/adial.jpg" alt="Poster A Day In A Life">
      </a>
      <a href="" class="moviePoster">
        <img src="@/assets/posters/mb.jpg" alt="Poster Maurice's Bar">
      </a>
      <a href="" class="moviePoster">
        <img src="@/assets/posters/amh.png" alt="Photo À Marée Haute">
      </a>
      <a href="" class="moviePoster">
        <img src="@/assets/posters/app.jpg" alt="Poster A Period Piece">
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.programming {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  .programmingDescription {
    display: flex;
    justify-content: space-between;
    width: 75vw;

    h2 {
      font-family: Syne, sans-serif;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 600;
    }

    .aboutProgrammingDescription {
      display: flex;
      flex-direction: column;
      width: 55%;
      gap: 0.5rem;

      h3 {
        font-family: Syne, sans-serif;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 500;
        color: #aeaeae;
      }
    }
  }

  .movieGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    max-width: calc(4 * 300px + 3 * 2rem);
    gap: 2rem;
    width: 75vw;

    .moviePoster {
      width: 100%;
      height: 100%;
      background-color: #1f1f1f;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 800px) {

  .programming .programmingDescription {
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    gap: 3rem;
    width: 85vw;

    h2 {
      text-align: center;
    }

    .aboutProgrammingDescription {
      width: 100%;
      font-size: 16px;
      gap: 0.6rem;
    }
  }
}

</style>
