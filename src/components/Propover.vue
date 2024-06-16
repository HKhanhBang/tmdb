<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const propoverEl = ref(null)
const isPropoverContentShow = ref(false)

function handleClosePropover(e) {
  if (!propoverEl.value.contains(e.target) && isPropoverContentShow.value === true) {
    isPropoverContentShow.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClosePropover)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClosePropover)
})
</script>
<template>
  <div class="propover" ref="propoverEl">
    <div class="propover-header-wrapper" @click="isPropoverContentShow = true">
      <slot name="header"></slot>
    </div>
    <div class="propover-content-wrapper" v-show="isPropoverContentShow">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/styles/components/propover.css';
</style>
