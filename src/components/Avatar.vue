<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'avatar'
  },
  size: {
    type: String,
    default: 'small',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  cursor: {
    type: String,
    default: 'pointer'
  }
})

defineEmits(['click'])

const styleObject = {
  cursor: props.cursor
}

function handleImageError(e) {
  e.target.style.display = 'none'
}
</script>
<template>
  <span :class="['avatar', `avatar--${size}`]" :style="styleObject" @click="$emit('click')">
    <img :src="src" :alt="alt" class="avatar__img" @error="handleImageError" />
  </span>
</template>
<style scoped>
.avatar {
  border-radius: 50%;
  display: flex;
  overflow: hidden;
}

.avatar--small {
  width: 32px;
  height: 32px;
}

.avatar--medium {
  width: 45px;
  height: 45px;
}

.avatar--large {
  width: 56px;
  height: 56px;
}

.avatar__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
