<script setup>
import { computed } from 'vue'

import CloseIcon from './icons/CloseIcon.vue'
import ReloadIcon from './icons/ReloadIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import TrendingIcon from './icons/TrendingIcon.vue'
import ArrowDownIcon from './icons/ArrowDownIcon.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  color: {
    type: String
  },
  marginRight: {
    type: Number
  },
  marginLeft: {
    type: Number
  },
  loading: {
    type: Boolean
  }
})

const icons = {
  close: CloseIcon,
  reload: ReloadIcon,
  search: SearchIcon,
  trending: TrendingIcon,
  arrowDown: ArrowDownIcon
}

const iconComponent = computed(() => icons[props.name])

const styleObject = computed(() => ({
  width: props.width + 'px',
  height: props.height + 'px',
  marginRight: props.marginRight + 'px',
  marginLeft: props.marginLeft + 'px',
  fill: props.color
}))
</script>
<template>
  <component
    :is="iconComponent"
    :style="styleObject"
    :class="['icon', { 'icon--loading': loading }]"
  ></component>
</template>
<style scoped>
.icon--loading {
  animation: reload-page-animation 1.2s linear infinite;
}

@keyframes reload-page-animation {
  100% {
    transform: rotate(360deg);
  }
}
</style>
