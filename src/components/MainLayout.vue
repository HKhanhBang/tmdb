<script setup></script>

<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style scoped>
main {
  margin-top: 64px;
  min-height: calc(100vh - 64px * 2);
  height: 5000px;
}
</style>
