<script setup>
import { ref } from 'vue'
import Propover from './Propover.vue'
import FavoriteIcon from './icons/FavoriteIcon.vue'
import OptionIcon from './icons/OptionIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import WatchListIcon from './icons/WatchListIcon.vue'
import PlayIcon from './icons/PlayIcon.vue'

defineProps({
  movie: {
    type: Object
  }
})

const emit = defineEmits(['hover'])

const cardImageRef = ref(null)

function handleHoverCard() {
  console.log(cardImageRef.value.src)

  emit('hover', cardImageRef.value.src)
}
</script>
<template>
  <div class="card" @mouseover="handleHoverCard">
    <div class="media">
      <div class="image">
        <img
          src="https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/qjoX7hl721FOiyeHsDkeQ6rFVLl.jpg"
          alt="movie poster"
          ref="cardImageRef"
        />
        <div class="icon-wrapper">
          <PlayIcon class="play-icon"></PlayIcon>
        </div>
      </div>

      <div class="options">
        <Propover>
          <template #header>
            <div class="propover-header">
              <button class="btn option-btn">
                <OptionIcon class="option-btn__icon"></OptionIcon>
              </button>
            </div>
          </template>
          <template #content>
            <div class="propover-content">
              <div class="propover-content-section">
                <RouterLink class="link propover-section-link" to="/">
                  <FavoriteIcon class="propover-section-link__icon"></FavoriteIcon>
                  Favorite</RouterLink
                >
              </div>

              <div class="propover-content-section">
                <RouterLink class="link propover-section-link" to="/">
                  <WatchListIcon class="propover-section-link__icon"></WatchListIcon>
                  Watchlist</RouterLink
                >
              </div>

              <div class="propover-content-section">
                <RouterLink class="link propover-section-link" to="/">
                  <StarIcon class="propover-section-link__icon"></StarIcon>
                  Your rating</RouterLink
                >
              </div>
            </div>
          </template>
        </Propover>
      </div>
    </div>

    <div class="card-content">
      <h3>
        <RouterLink to="" class="link card-content__title">The Bear </RouterLink>
      </h3>
      <span class="card-content__desc">S3 Teaser - "We're Open"</span>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/styles/components/trailerCard.css';
</style>
