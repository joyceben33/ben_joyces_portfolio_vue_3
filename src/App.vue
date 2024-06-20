<template>
  <v-app class="no-scroll">
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue'
</script>

<style scoped>
.no-scroll {
  overflow-x: hidden;
}
</style>