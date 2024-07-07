<template>
  <section id="about-me">
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>About Me</h2>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="7">
          <p>
            I'm a Full Stack Developer with over 3 years of programming experience, having worked on multiple production
            grade applications in an Agile setting. I've collaborated with UI/UX designers, Product Owners, and other
            engineers to ensure I'm delivering software that the customer needs or patching critical bug fixes in a
            timely manner. I consider myself as a supportive and enthusiastic team player, dedicated to streamlining
            development processes. My mantra is “Work smarter not harder”. Outside of work I enjoy hitting tennis,
            weight training, & watching / attending NC State Athletic Events.
          </p>
        </v-col>
        <v-col cols="12" md="5">
          <v-img id="about-profile-img" :src="AboutMeImage" width="300"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import AboutMeImage from '@/assets/nc_state_final_four_2024.jpeg';
</script>
<style lang="scss" scoped>
#about-profile-img {
  border-radius: 50%;
}

.myBio {
  min-width: 380px;
  max-width: 750px;
}
</style>
