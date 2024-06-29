<template>
  <v-parallax :src="HeroImage" height="500px">
    <div id="hero-gradient" class="d-flex align-center">
      <v-container>
        <v-row class="text-center">
          <v-col>
            <!-- Who Are You? -->
            <span id="typer-constant">Describe Yourself?</span>
            <h1>
              <VueTyper class="d-block d-sm-inline" :text="vueTypeOptions" :repeat="Infinity" :pre-type-delay="1000"
                :type-delay="100" :pre-erase-delay="2000" :erase-delay="40" erase-style="backspace"
                caret-animation="smooth" />
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-parallax>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HeroImage from '@/assets/golden_gate_0002.jpeg'


const vueTypeOptions = ref([
  'Software Engineer',
  'NC State Alum',
  'Tennis & Pickleball Player',
  'Nutrition Enthusiast',
  'Golfer',
  'Gym Advocate',
])

</script>

<style lang="scss" scoped>
#hero-gradient {
  background-image: linear-gradient(to right top, rgba(36, 36, 36, 0.9), rgba(25, 32, 72, 0.9));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 64px;
}



#typer-constant {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #ffffff;
}




@media screen and (min-width: 960px) {
  .vue-typer .custom.caret {
    height: 2.75rem;
  }
}
</style>