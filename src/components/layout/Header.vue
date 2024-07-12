<template>
  <div id="header">
    <v-app-bar class="py-1 px-4" app color="background" scroll-behavior="elevate" height="85">
      <v-app-bar-nav-icon default="mdiMenu" @click.stop="toggleMobileDrawer()"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <div>
        <h1 id="profile-name" class="mb-0">Ben Joyce</h1>
      </div>

      <v-spacer></v-spacer>
      <div>
        <v-img class="rounded-circle" contain :src="ProfileImage" transition="scale-transition" width="50px" />
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="mobileDrawer" width="300" fixed temporary>
      <v-list>
        <v-list-item prepend-icon="mdi-account" title="About Me" @click="scrollTo('about-me')"></v-list-item>

        <v-list-group value="Experience">
          <template v-slot:activator="{ props }">
            <v-list-item title="Experience" prepend-icon="mdi-domain" v-bind="props"> </v-list-item>
          </template>
          <v-list-item
            v-for="projectLink in projectLinks"
            :key="projectLink.name"
            @click="scrollTo(projectLink.scrollHash)"
            :title="projectLink.name"
          >
          </v-list-item>
        </v-list-group>

        <v-list-item prepend-icon="mdi-account-group" title="Social" @click="scrollTo('social-media')"></v-list-item>
        <v-list-group value="Settings">
          <template v-slot:activator="{ props }">
            <v-list-item title="Settings" prepend-icon="mdi-cog" v-bind="props"> </v-list-item>
          </template>
          <v-list-item>
            <v-list-item-action class="d-flex justify-space-between align-center pr-3">
              <v-list-item-title>
                <v-icon :icon="darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"></v-icon>
                &nbsp; Mode
              </v-list-item-title>
              <v-switch
                class="d-flex align-center"
                v-model="darkMode"
                color="primary"
                @update:model-value="toggleTheme"
              ></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ProfileImage from '@/assets/profile_black_and_white.jpg';
// https://github.com/vuetifyjs/vuetify/issues/9648
import { useGoTo, useTheme } from 'vuetify';

type ProjectLink = {
  name: string;
  scrollHash: string;
};

const router = useRouter();
const route = useRoute();
const theme = useTheme();

const mobileDrawer = ref<boolean | null>(null);

const darkMode = ref<boolean | null>(null);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

const projectLinks = ref<ProjectLink[]>([
  { name: 'LASSO', scrollHash: 'lasso' },
  { name: 'Pacific Arc', scrollHash: 'pacific-arc' },
  { name: 'Pomona Pipe Products', scrollHash: 'pomona-pipe-products' },
]);

// Check if element is in the visible viewport
const isInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
const componentIds = ref([
  'hero',
  'about-me',
  'lasso',
  'pacific-arc',
  'pomona-pipe-products',
  'courtside-gamble',
  'social-media',
]);

const handleScroll = () => {
  componentIds.value.forEach((componentId) => {
    const element = document.getElementById(componentId);
    const currentRouteHash = route.hash;

    if (element && isInViewport(element) && currentRouteHash !== `#${componentId}`) {
      const route = { hash: componentId === 'hero' ? '' : componentId };
      router.replace(route);
    }
  });
};

onMounted(() => {
  darkMode.value = theme.global.name.value === 'dark' ? true : false;

  // window.addEventListener('scroll', handleScroll);
});

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// })

const goTo = useGoTo({ duration: 1000, offset: -25, easing: 'easeInOutCubic' });

const toggleMobileDrawer = () => {
  mobileDrawer.value = !mobileDrawer.value;
  // const bodyTag = document.getElementsByTagName('body')[0];
  // if (mobileDrawer.value) {
  //   bodyTag.style.overflow = 'hidden';
  //   bodyTag.style.height = '100vh';
  // } else {
  //   bodyTag.style.removeProperty('overflow');
  //   bodyTag.style.removeProperty('height');
  // }
};

const scrollTo = (id: string) => {
  toggleMobileDrawer();
  // goTo(id);
};
</script>

<style lang="scss" scoped>
//MY Name
#profile-name {
  font-family: 'Mr De Haviland', 'Poppins', sans-serif;
  font-size: 3rem;
  line-height: 1.25;
}

// .v-app-bar {

//   a,
//   button {
//     opacity: 0.7;
//     will-change: opacity;
//     transition: opacity 0.3s ease;

//     &:hover {
//       opacity: 1;
//       color: #ffffff !important;
//     }
//   }
// }

.v-overlay {
  height: 100vh;
}

.nav-menu-item {
  font-size: 20px;
  margin: 0px 4px 0px 0px;
}
</style>
