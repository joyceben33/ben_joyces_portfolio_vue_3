<template>
  <section id="education">
    <v-container>
      <div class="d-flex justify-center align-center my-8">
        <h2>Education</h2>
      </div>
      <v-timeline side="end">
        <v-timeline-item
          v-for="(institution, i) in education"
          :key="i"
          fill-dot
          size="x-large"
          max-width="900px"
          dot-color="surface"
        >
          <template v-slot:icon>
            <v-avatar :image="institution.image"></v-avatar>
          </template>
          <template v-slot:opposite>
            {{ `${institution.startYear} - ${institution.endYear}` }}
          </template>
          <v-card rounded="pill">
            <v-card-title
              :class="[
                'd-flex align-center px-6',
                `bg-${theme.global.current.value.dark ? 'surface-lighten-1' : 'surface-darken-1'}`,
              ]"
            >
              <h4 class="my-2">{{ institution.name }}</h4>
              <div class="d-flex align-center justify-start" v-if="institution.degree">
                <h4>&nbsp; | &nbsp;</h4>
                <h5>{{ institution.degree }}</h5>
              </div>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();

interface IInstitution {
  name: string;
  startYear: string;
  endYear: string;
  image: string;
  degree?: string;
}

const education = ref<IInstitution[]>([
  {
    name: 'Project Shift',
    startYear: '2020',
    endYear: '2020',
    image:
      'https://media.licdn.com/dms/image/C560BAQGV75oBGQvAig/company-logo_200_200/0/1630639311140/projectshift_logo?e=1729123200&v=beta&t=NpJBjPIzgcalmkgNKAp7OTs5prNht4yXcicXWblEVOQ',
    degree: 'Certificate, Full-Stack Web Development',
  },
  {
    name: 'NC State University',
    startYear: '2015',
    endYear: '2019',
    image:
      'https://media.licdn.com/dms/image/C4D0BAQGaD7AuaL571Q/company-logo_200_200/0/1645128364859/north_carolina_state_university_logo?e=1729123200&v=beta&t=I-XnR9i0k_DfI3RvHqUhZmjV7Uj9oo5kCHbUkCeUJN0',
    degree: 'BSBA, Information Technology',
  },
  {
    name: 'Walter Hines Page High School',
    startYear: '2011',
    endYear: '2015',
    image:
      'https://media.licdn.com/dms/image/C4E0BAQETEmd13EeKlg/company-logo_100_100/0/1630582061494?e=1729123200&v=beta&t=cPpZxCr47jxC4UEvj7G_tcNffd__6zO3WRE4u1QdIHo',
  },
]);
</script>
<style lang="scss" scoped></style>
