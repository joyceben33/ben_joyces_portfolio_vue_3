<template>
  <v-app>
    <Header />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<style scoped></style>
