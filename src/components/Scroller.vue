<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  fade: {
    type: Boolean,
    default: false
  },
  backgroundImage: {
    type: String,
    default: '../../images/trending-background.svg'
  }
})

const isSrollerFadeShow = ref(props.fade)

const styleObject = computed(() => ({
  backgroundImage: props.backgroundImage
}))

function handleToogleScrollerFade(e) {
  if (props.fade) {
    if (e.target.scrollLeft >= 20) {
      isSrollerFadeShow.value = false
    } else {
      isSrollerFadeShow.value = true
    }
  }
}
</script>

<template>
  <div class="scroller" :style="styleObject">
    <div class="scroller-content" @scroll="handleToogleScrollerFade">
      <slot></slot>
    </div>

    <div :class="['scroller-fade', { 'scroller-fade--hide': !isSrollerFadeShow }]"></div>
  </div>
</template>

<style scoped>
@import '../assets/styles/components/scroller.css';
</style>
