<template>
  <footer>
    <p>{{ copyright }} </p>
  </footer>
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
      // copyright: 'Copyright 2018',
    }
  },

  computed: {
    copyright() {
      return 'Copyright 2018 '+ this.title
    }
  },

  created() {
    bus.$on('titleUpdate', (data) => {
      this.title = data;
    })
  },
}

</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
