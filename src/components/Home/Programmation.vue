<script setup>

</script>

<template>
  <div class="programming">
    <h2>Programmation</h2>
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

  h2 {
    font-family: Syne, sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
  }

  .movieGrid {
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
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

</style>
