<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  selected: {
    type: Object,
    default: null
  },
  type: {
    type: String,
    validator: (val) => ['small'].includes(val)
  }
})

const emit = defineEmits(['change'])

const open = ref(false)

const selected = computed(() => {
  return props.selected ? props.selected : props.options[0]
})

function handleChooseOption(option) {
  emit('change', option)
  open.value = false
}
</script>
<template>
  <div :class="['select', `select--${type}`]">
    <div class="header" @click="open = !open">
      <span class="header__title">{{ selected.name }}</span>
      <span class="header__icon"></span>
    </div>
    <div class="options" v-show="open">
      <ul>
        <li
          v-for="option in options"
          :key="option.value"
          class="options__option"
          :class="{ 'options__option--active': selected.value === option.value }"
          @click="handleChooseOption(option)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.select {
  position: relative;
}

.select--small .header__title {
  font-size: 14.4px;
  line-height: 21.6px;
}

.header {
  display: flex;
  background-color: #e4e7eb;
  border-radius: 2.5px;
  cursor: pointer;
}

.header:hover {
  background-color: #ced3db;
  transition: 0.2s ease-in-out;
}

.header__title {
  padding: 6px 12px;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.header__icon {
  width: 28px;
  position: relative;
}

.header__icon::after {
  content: '';
  display: block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.options {
  padding: 8px 0;
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  right: 0;
  max-height: 318px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2.5px;
  color: #212529;
}

.options__option {
  padding: 3px 24px;
  min-height: 1.5em;
  line-height: 1.5em;
  cursor: pointer;
  transition: 0.2s ease;
}

.options__option:hover {
  color: #16181b;
  background-color: #f8f9fa;
}

.options__option--active {
  font-weight: 600;
  background-color: #f2f2f2;
}

.options__option:hover.options__option--active {
  background-color: rgb(1, 180, 228);
  color: #fff;
}
</style>
