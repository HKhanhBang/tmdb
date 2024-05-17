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
header,
footer {
  background-color: var(--primary-color);
  min-height: 64px;
}

main {
  min-height: calc(100vh - 64px * 2);
}
</style>
