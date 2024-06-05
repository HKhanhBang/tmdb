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
    <div class="propover-header" @click="isPropoverContentShow = true">
      <slot name="header"></slot>
    </div>
    <div class="propover-content" v-show="isPropoverContentShow">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped>
.propover {
  position: relative;
  z-index: 99;
}

.propover--account .propover-content {
  min-width: 180px;
}

.propover--language .propover-content {
  top: calc(100% + 11px);
  width: 300px;
  padding: 13px;
}

.propover-content {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 4px;
  z-index: 99;
}

.propover-content::before {
  content: '';
  display: block;
  border: 7px solid #fff;
  border-color: transparent transparent #fff transparent;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
