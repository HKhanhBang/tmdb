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
    <input type="radio" name="radio" :value="value" v-model="model" />
    <span class="checkmark"></span>
    {{ name }}
  </label>
</template>
<style scoped>
.container {
  margin-bottom: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 4px;
}

.container input {
  display: none;
}

.checkmark {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #adb5bd;
}

.container input:checked ~ .checkmark {
  background-color: rgb(1, 180, 228);
  border-color: rgb(1, 180, 228);
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
  width: 6px;
  height: 6px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.container input:checked ~ .checkmark:after {
  display: block;
}
</style>
