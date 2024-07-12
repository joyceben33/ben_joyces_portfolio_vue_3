<template>
  <v-footer id="social-media" class="d-block py-2" color="background">
    <v-container>
      <!-- Social Media Icons -->
      <div class="d-flex justify-center mb-2">
        <v-btn color="background" flat icon target="_blank" href="https://github.com/joyceben33" class="mx-1">
          <CustomSimpleIcon :icon="siGithub" />
        </v-btn>
        <v-btn
          color="background"
          flat
          icon
          target="_blank"
          href="https://www.linkedin.com/in/ben-marlow-joyce/"
          class="mx-1"
        >
          <CustomSimpleIcon :icon="siLinkedin" />
        </v-btn>
        <v-btn
          color="background"
          flat
          icon
          target="_blank"
          href="https://www.facebook.com/ben.joyce.3363/"
          class="mx-1"
        >
          <CustomSimpleIcon :icon="siFacebook" />
        </v-btn>
      </div>
      <v-divider></v-divider>
      <!-- legal info -->
      <v-row class="text-center">
        <v-col>&copy; {{ `${presentYear} Ben Joyce, All rights reserved` }} </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { siFacebook, siGithub, siLinkedin } from 'simple-icons';
import CustomSimpleIcon from '@/components/custom/CustomSimpleIcon.vue';

const presentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style lang="scss">
// .appBarContent {
//   width: 100%;
//   height: 100%;
// }
</style>
