<template>
  <div>
    <h1>List of ninjas:</h1>
    <ul>
      <li v-for="(ninja, index) in ninjas" :key="index">{{ ninja }}</li>
    </ul>
    <p>Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ninjas',

  props: {
    name: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      'ninjas': ['Yoshi', 'Mario', 'Ryu'],
    }
  },
}
</script>

<style scoped>
h1 {
  color: green;
}
</style>
