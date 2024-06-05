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
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

main {
  margin-top: 64px;
  min-height: calc(100vh - 64px * 2);
  height: 5000px;
}
</style>
