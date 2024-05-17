<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <template #header>
      <Header></Header>
    </template>
    <template #default>
      <RouterView></RouterView>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </MainLayout>
</template>

<style scoped></style>
