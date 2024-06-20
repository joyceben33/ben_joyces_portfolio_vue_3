declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

// declare module 'vuetify/lib/services/goto' {
//   import Vue from 'vue';
//   export default function goTo<T extends string | number | HTMLElement | Vue>(target: T, options?: any): any;
// }
