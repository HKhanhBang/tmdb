<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})
const model = defineModel()
</script>
<template>
  <label class="container">
    {{ name }}
    <input type="checkbox" :value="value" v-model="model" />
  </label>
</template>
<style scoped></style>
