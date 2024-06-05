<script setup>
defineProps({
  modifier: {
    type: String
  }
})
</script>
<template>
  <div :class="['dropdown', `dropdown--${modifier}`]">
    <div class="dropdown__title">
      <slot name="dropdown-title"></slot>
    </div>
    <div class="dropdown-content">
      <slot name="dropdown-content"></slot>
    </div>
  </div>
</template>
<style scoped>
.dropdown {
  position: relative;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown__title {
  cursor: pointer;
  display: inline-block;
}

.dropdown--navigation .dropdown__title {
  padding: 8px;
  color: #fff;
  font-weight: 600;
}

.dropdown-content {
  position: absolute;
  top: 100;
  left: 0;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: none;
  z-index: 99;
}

.dropdown--navigation .dropdown-content {
  padding: 8px 0;
  line-height: 24px;
  max-width: 400px;
}
</style>
