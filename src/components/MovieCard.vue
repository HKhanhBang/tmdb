<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Propover from './Propover.vue'
import FavoriteIcon from './icons/FavoriteIcon.vue'
import OptionIcon from './icons/OptionIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import WatchListIcon from './icons/WatchListIcon.vue'

const isLayerShow = ref(false)
const propoverHeaderRef = ref(null)
const propoverContentRef = ref(null)

defineProps({
  movie: {
    type: Object
  }
})

function handleHiddenLayer(e) {
  if (
    !propoverContentRef.value.contains(e.target) &&
    !propoverHeaderRef.value.contains(e.target) &&
    isLayerShow.value === true
  ) {
    isLayerShow.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleHiddenLayer)
})

onUnmounted(() => {
  document.removeEventListener('click', handleHiddenLayer)
})
</script>
<template>
  <div class="card">
    <div class="media">
      <RouterLink to="" class="media__image">
        <img
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/mztdt3y6GBsJR69zHtszFezTCLT.jpg"
          alt="movie poster"
        />
      </RouterLink>

      <div class="options">
        <Propover>
          <template #header>
            <div class="propover-header" ref="propoverHeaderRef">
              <button class="btn option-btn" @click="isLayerShow = true">
                <OptionIcon class="option-btn__icon"></OptionIcon>
              </button>
            </div>
          </template>
          <template #content>
            <div class="propover-content" ref="propoverContentRef">
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
      <span class="rating">
        <span class="outer-ring">
          <span class="score"> 69<sup class="score__percent">%</sup> </span>
        </span>
      </span>
      <h3>
        <RouterLink to="" class="link card-content__title"
          >Furiosa: Câu Chuyện Từ Max Điên
        </RouterLink>
      </h3>
      <span class="card-content__date">May 24, 2024</span>
    </div>
    <div :class="['layer', { 'layer--show': isLayerShow }]"></div>
  </div>
</template>
<style scoped>
@import '../assets/styles/components/movieCard.css';
</style>
