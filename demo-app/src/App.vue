<template>
  <div>
    <app-header :title="title" @updateTitle="newTitle"/>
    <app-ninjas :ninjas="ninjas"/>
    <app-footer :title="title"/>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Ninjas from "@/components/Ninjas.vue";

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
  },

  data() {
    return {
      ninjas: [
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'GIT', speciality: 'Historu', show: false}
      ],

      title: 'Vue Ninjas',
    }
  },
  methods: {
    newTitle(t) {
      this.title = t
    },
  },
}

</script>

<style>

</style>
