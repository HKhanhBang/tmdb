<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #default>
      <RouterView></RouterView>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </Layout>
</template>

<style scoped></style>
