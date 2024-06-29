<template>
  <v-app>
    <Header />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue'
</script>

<style scoped></style>