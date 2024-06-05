<script setup>
import { ref } from 'vue'

const buttonEl = ref(null)

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

defineEmits(['click'])
</script>

<template>
  <button ref="buttonEl" :type="type" :disabled="disabled" @click="$emit('click')" class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  border-style: none;
  background-color: transparent;
}

.btn--open-language-propover {
  padding: 4px 7px;
  border: 1px solid #fff;
  border-radius: 3px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 1.4rem;
  transition: linear 0.1s;
}

.btn--open-language-propover:hover {
  color: var(--primary-color);
  background-color: #fff;
}

.btn-change-language {
  margin-top: 30px;
  border-radius: 5px;
  background-color: rgb(1, 180, 228);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  font-family: var(--font-familiy);
}

.btn-change-language:hover {
  background-color: var(--primary-color);
  transition: 0.1s linear;
}

.btn-change-language--loading {
  background-color: var(--primary-color);
}

.btn--remove-search-text {
  opacity: 0.8;
}

.btn--remove-search-text:hover {
  opacity: 1;
}
</style>
