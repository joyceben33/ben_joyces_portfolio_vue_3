<template>
    <div id="hero" dark>
        <v-img id="hero-img" :src="HeroImage" height="500px">
            <div id="hero-gradient" class="d-flex align-center">
                <v-container>
                    <v-row class="text-center">
                        <v-col>
                            <!-- Who Are You? -->
                            <span id="typer-constant">Describe Yourself?</span>
                            <h1>
                                <vue-typer class="d-block d-sm-inline" :text="vueTypeOptions" :repeat="Infinity"
                                    :shuffle="false" initial-action="typing" :pre-type-delay="1000" :type-delay="100"
                                    :pre-erase-delay="2000" :erase-delay="40" erase-style="backspace"
                                    :erase-on-complete="false" caret-animation="smooth" />
                            </h1>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-img>
    </div>
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
<style lang="scss" scoped></style>