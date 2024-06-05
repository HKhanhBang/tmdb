<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  borderWidth: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'black'
  }
})

const styleObject = {
  width: props.width + 'px',
  height: props.height + 'px',
  borderTopColor: props.color,
  borderBottomColor: props.color,
  borderWidth: props.borderWidth + 'px'
}
</script>
<template>
  <span class="spinner" :style="styleObject"></span>
</template>
<style scoped>
.spinner {
  display: block;
  border-style: solid;
  border-radius: 50%;
  border-right-color: transparent;
  border-left-color: transparent;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
