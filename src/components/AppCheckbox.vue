<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})
const model = defineModel()
</script>
<template>
  <label class="container">
    {{ name }}
    <input type="checkbox" :value="value" v-model="model" />
    <span class="checkmark"></span>
  </label>
</template>
<style scoped></style>
