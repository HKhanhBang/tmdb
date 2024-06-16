<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ArrowDownIcon from './icons/ArrowDownIcon.vue'

const anchorRefs = ref([])
const backgroundRef = ref(null)
const selectorRef = ref(null)
const isSelectorOpen = ref(false)

const isMobile = ref(false)

const selectedOption = defineModel('selectedOption')

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  type: {
    type: String
  }
})

const typeClass = computed(() => `selector-wrapper--${props.type}`)

function locateBackGround(el) {
  const anchorRect = el.getBoundingClientRect()
  const selectorRect = selectorRef.value.getBoundingClientRect()
  backgroundRef.value.style.width = anchorRect.width + 'px'
  backgroundRef.value.style.left = anchorRect.left - selectorRect.left + 'px'
}

async function handleChooseOption(e, option) {
  if (isMobile.value) {
    isSelectorOpen.value = !isSelectorOpen.value
  }

  selectedOption.value = option

  locateBackGround(e.currentTarget)
}

function checkScreenSize() {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize)

  anchorRefs.value.forEach((el) => {
    if (Array.from(el.classList).includes('anchor--selected')) {
      locateBackGround(el)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>
<template>
  <div :class="['selector-wraper', typeClass, { 'selector-wraper--mobile': isMobile }]">
    <div :class="['selector', { 'selector--open': isSelectorOpen }]" ref="selectorRef">
      <div class="selector__background" ref="backgroundRef"></div>
      <div
        class="anchor"
        v-for="option in options"
        :key="option.id"
        ref="anchorRefs"
        :class="[{ 'anchor--selected': selectedOption.value === option.value }]"
        @click="(e) => handleChooseOption(e, option)"
      >
        <span class="anchor__title">{{ option.name }}</span>
        <ArrowDownIcon class="anchor__icon"></ArrowDownIcon>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/styles/components/switch.css';
</style>
