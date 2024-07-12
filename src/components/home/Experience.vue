<template>
  <section id="experience">
    <v-container>
      <div class="d-flex justify-center align-center my-8">
        <h2>Experience</h2>
      </div>
      <v-timeline justify="center">
        <v-timeline-item
          v-for="(job, i) in jobs"
          :key="i"
          :dot-color="i % 2 == 0 ? 'accent' : 'surface'"
          size="x-large"
          icon="mdi-domain"
          max-width="500px"
        >
          <template v-slot:opposite>
            {{ `${job.startDate.month} ${job.startDate.year} - ${job.endDate.month} ${job.endDate.year}` }}
          </template>
          <v-card :id="job.scrollTag" tile rounded="lg" hover @click.stop="job.show = !job.show">
            <v-card-title
              :class="[
                `d-flex align-center justify-space-between`,
                `bg-${theme.global.current.value.dark ? 'surface-lighten-1' : 'surface-darken-1'}`,
              ]"
            >
              <h4>{{ job.name }}</h4>
              <v-btn
                :color="theme.global.current.value.dark ? 'surface-lighten-1' : 'surface-darken-1'"
                flat
                icon
                @click.stop="job.show = !job.show"
              >
                <v-icon>{{ job.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-title>

            <v-expand-transition>
              <div class="px-4" v-show="job.show">
                <v-card-subtitle class="my-2">Description:</v-card-subtitle>
                <v-card-text>
                  {{ job.description }}
                </v-card-text>
                <div v-if="job.technologies.length">
                  <v-divider class="my-4"></v-divider>

                  <v-card-subtitle class="font-weight-medium">Technologies Used:</v-card-subtitle>
                  <v-card-actions class="flex-wrap">
                    <v-btn
                      v-for="tech in job.technologies"
                      :key="tech.name"
                      :href="tech.docsLink"
                      target="_blank"
                      :title="tech.name"
                      large
                      icon
                    >
                      <CustomSimpleIcon :icon="tech.icon" />
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-expand-transition>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { IJob } from '@/types/Job';
import {
  siNuxtdotjs,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siVuetify,
  siAmazons3,
  siAwslambda,
  siServerless,
  siJest,
  siPostgresql,
  siAmazonec2,
  siDocker,
  siVuedotjs,
  siQuasar,
  siBootstrap,
  siSequelize,
  siMysql,
  siAmazonrds,
  siAmazoneks,
  siAmazonapigateway,
  siCypress,
} from 'simple-icons';
import { useTheme } from 'vuetify/lib/framework.mjs';
import CustomSimpleIcon from '../custom/CustomSimpleIcon.vue';

const theme = useTheme();

const jobs = ref<IJob[]>([
  {
    name: 'LASSO',
    startDate: {
      month: 'Feb',
      year: '2022',
    },
    endDate: {
      month: 'Mar',
      year: '2023',
    },
    show: false,
    isOrg: true,
    color: 'lasso',
    scrollTag: 'lasso',
    description: `LASSO is a SaaS company, that sells software to companies in the live event industry. In my role here I worked with four other engineers, one UI/UX designer and one Product Owner. I played a role in the development of two different products from the ground up, which involved constant communication between the Product Owner and the engineering team. My responsibilities as a Software Engineer III were database development, api development, and front end development. Some of the individual contributions include creating a private component library utilizing GitHub’s Private NPM Registry, developing a real-time collaborative note editing tool with TalkJs, CRUD api routes that leveraged Zod Schema pattern matching, Casbin for permissions, and Sequelize as our ORM.`,
    image: 'lasso_screenshot.png',
    deployLink: 'https://www.lasso.io/',
    repoLink: 'https://github.com/lassoworkforce',
    technologies: [
      {
        name: 'Typescript',
        icon: siTypescript,
        docsLink: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icon: siJavascript,
        docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Vue.js',
        icon: siVuedotjs,
        docsLink: 'https://vuejs.org/',
      },
      {
        name: 'Bootstrap',
        icon: siBootstrap,
        docsLink: 'https://getbootstrap.com/',
      },
      {
        name: 'Cypress',
        icon: siCypress,
        docsLink: 'https://www.cypress.io/',
      },
      {
        name: 'Node.js',
        icon: siNodedotjs,
        docsLink: 'https://nodejs.org/en/',
      },
      {
        name: 'Sequelize',
        icon: siSequelize,
        docsLink: 'https://sequelize.org/',
      },
      {
        name: 'MySQL',
        icon: siMysql,
        docsLink: 'https://www.mysql.com/',
      },
      {
        name: 'AWS RDS',
        icon: siAmazonrds,
        docsLink: 'https://aws.amazon.com/rds/',
      },
      {
        name: 'AWS Lambda',
        icon: siAwslambda,
        docsLink: 'https://aws.amazon.com/lambda/',
      },
      {
        name: 'AWS S3',
        icon: siAmazons3,
        docsLink: 'https://aws.amazon.com/s3/',
      },
      {
        name: 'AWS EC2',
        icon: siAmazonec2,
        docsLink: 'https://aws.amazon.com/ec2/',
      },
      {
        name: 'AWS EKS',
        icon: siAmazoneks,
        docsLink: 'https://aws.amazon.com/eks/',
      },
      {
        name: 'Docker',
        icon: siDocker,
        docsLink: 'https://www.docker.com/',
      },
    ],
  },
  {
    name: 'Pacific Arc, Inc.',
    startDate: {
      month: 'Feb',
      year: '2021',
    },
    endDate: {
      month: 'Feb',
      year: '2022',
    },
    show: false,
    isOrg: true,
    color: 'primary',
    scrollTag: 'pacific-arc',
    description:
      'Pacific Arc, Inc. is an architectural design tool wholesaler. In my role here I helped build an internal web application that provided tools to help with different workflows within the business. Some of the workflows / features I developed were order fulfillment, order analytics, order logistics, & inventory management. In addition to being an engineer on the product team, I also held responsibilities in their dev-ops department. Some of the dev-ops contributions include AWS Cognito & IAM User Management, setting up a CI/CD pipeline, & migrating Docker Image from Linux to Linux 2.',
    image: 'pacific_arc_screenshot.png',
    deployLink: 'https://www.pacificarc.us/',
    repoLink: 'https://github.com/Pacific-Arc',
    technologies: [
      {
        name: 'Typescript',
        icon: siTypescript,
        docsLink: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icon: siJavascript,
        docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Vue.js',
        icon: siVuedotjs,
        docsLink: 'https://vuejs.org/',
      },
      {
        name: 'Quasar',
        icon: siQuasar,
        docsLink: 'https://quasar.dev/',
      },
      {
        name: 'Node.js',
        icon: siNodedotjs,
        docsLink: 'https://nodejs.org/en/',
      },
      {
        name: 'PostgreSQL',
        icon: siPostgresql,
        docsLink: 'https://www.postgresql.org/',
      },
      {
        name: 'AWS RDS',
        icon: siAmazonrds,
        docsLink: 'https://aws.amazon.com/rds/',
      },
      {
        name: 'AWS Lambda',
        icon: siAwslambda,
        docsLink: 'https://aws.amazon.com/lambda/',
      },
      {
        name: 'AWS API Gateway',
        icon: siAmazonapigateway,
        docsLink: 'https://aws.amazon.com/api-gateway/',
      },
      {
        name: 'AWS S3',
        icon: siAmazons3,
        docsLink: 'https://aws.amazon.com/s3/',
      },
      {
        name: 'AWS EC2',
        icon: siAmazonec2,
        docsLink: 'https://aws.amazon.com/ec2/',
      },
      {
        name: 'AWS EKS',
        icon: siAmazoneks,
        docsLink: 'https://aws.amazon.com/eks/',
      },
      {
        name: 'Docker',
        icon: siDocker,
        docsLink: 'https://www.docker.com/',
      },
    ],
  },
  {
    name: 'Pomona Pipe Products',
    startDate: {
      month: 'May',
      year: '2020',
    },
    endDate: {
      month: 'Mar',
      year: '2021',
    },
    show: false,
    isOrg: true,
    scrollTag: 'pomona-pipe-products',
    description: `Pomona Pipe Products, Inc. is a civil engineering firm specializing in bridges and environmental construction. The company services a wide range of private businesses, municipalities, and state Departments of Transportation. In my role as a full-stack developer, I helped engineer the company's public-facing web application for marketing their products and services. The stack consists of a NuxtJs(SSR) Web Application, a Serverless Node API, AWS S3 Buckets, AWS CloudFront CDN, a Headless CMS (Prismic.io), Algolia Search Engine, and a server-side rendering web application. In addition I have also worked to improve the company's search engine rankings by optimizing meta data and forming a link-building strategy through social media.`,
    image: 'pomona_screenshot.png',
    deployLink: 'https://pomonapipeproducts.com/',
    repoLink: 'https://github.com/pomona-pipe/',
    technologies: [
      {
        name: 'Typescript',
        icon: siTypescript,
        docsLink: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Javascript',
        icon: siJavascript,
        docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Nuxt.js',
        icon: siNuxtdotjs,
        docsLink: 'https://nuxtjs.org/',
      },
      {
        name: 'Vuetify.js',
        icon: siVuetify,
        docsLink: 'https://vuetifyjs.com/en/',
      },
      {
        name: 'Jest',
        icon: siJest,
        docsLink: 'https://jestjs.io/',
      },
      {
        name: 'Node.js',
        icon: siNodedotjs,
        docsLink: 'https://nodejs.org/en/',
      },
      {
        name: 'Serverless',
        icon: siServerless,
        docsLink: 'https://www.serverless.com/cloud/docs',
      },
      {
        name: 'AWS Lambda',
        icon: siAwslambda,
        docsLink: 'https://aws.amazon.com/lambda/',
      },
      {
        name: 'AWS API Gateway',
        icon: siAmazonapigateway,
        docsLink: 'https://aws.amazon.com/api-gateway/',
      },
      {
        name: 'AWS S3',
        icon: siAmazons3,
        docsLink: 'https://aws.amazon.com/s3/',
      },
      {
        name: 'AWS EC2',
        icon: siAmazonec2,
        docsLink: 'https://aws.amazon.com/ec2/',
      },
      {
        name: 'AWS EKS',
        icon: siAmazoneks,
        docsLink: 'https://aws.amazon.com/eks/',
      },
      {
        name: 'Docker',
        icon: siDocker,
        docsLink: 'https://www.docker.com/',
      },
    ],
  },
]);
</script>
<style lang="scss" scoped></style>
