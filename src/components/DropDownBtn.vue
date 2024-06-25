<script setup>
import { ref } from 'vue'
import ArrowDownIcon from './icons/ArrowDownIcon.vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const isDropDownContentShow = ref(props.open)
</script>
<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn dropdown-btn"
      @click="isDropDownContentShow = !isDropDownContentShow"
    >
      Sort
      <ArrowDownIcon
        :class="['dropdown-btn__icon', { 'dropdown-btn__icon--rotate': isDropDownContentShow }]"
      ></ArrowDownIcon>
    </button>
    <div class="dropdown-content" v-show="isDropDownContentShow">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.dropdown {
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 12px;
}

.dropdown-btn {
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  width: 100%;
  align-items: center;
  font-weight: 600;
  font-size: 1.76rem;
}

.dropdown-btn__icon {
  width: 16px;
  height: 16px;
}

.dropdown-content {
}

.dropdown-btn__icon--rotate {
  transform: rotate(90deg);
}
</style>
