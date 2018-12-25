<template>
  <header>
    <h1 @click="changeTitle()">{{ title }}</h1>
  </header>
</template>

<script>

import { bus } from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      // title: 'Vue Ninjas',
    }
  },

  methods: {
    changeTitle() {
      // this.$emit('updateTitle', "Vue Wizard")
      // this.title = "Vue Wizard"
      bus.$emit('titleUpdate', "Vue Wizard")
    },
  },
}

</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
