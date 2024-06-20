<template>
    <section id="about-me">
        <v-container>
            <v-row>
                <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
                    <h2>About Me</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="7">
                    <p>
                        I'm a Full Stack Developer with over 3 years of programming experience, having worked on
                        multiple production
                        grade applications in an Agile setting. I've collaborated with UI/UX designers, Product
                        Owners,
                        and other
                        engineers to ensure I'm delivering software that the customer needs or patching critical bug
                        fixes in a
                        timely manner. I consider myself as a supportive and enthusiastic team player, dedicated to
                        streamlining
                        development processes. My mantra is “Work smarter not harder”. Outside of work I enjoy
                        hitting
                        tennis,
                        weight training, & watching / attending NC State Athletic Events.
                    </p>
                </v-col>
                <v-col cols="5">
                    <v-img id="about-profile-img" :src="ProfileImage"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup lang="ts">
import ProfileImage from '@/assets/profile_black_and_white.jpg'

</script>
<style lang="scss" scoped>
#about-profile-img {
    border-radius: 50%;
    max-width: "100px" !important;
}

.myBio {
    min-width: 380px;
    max-width: 750px;
}
</style>