<template>
  <div>
    <ul>
      <li v-for="(ninja, index) in ninjas" :key="index">{{ ninja }}</li>
    </ul>
    <ul>
      <li v-for="(i, index) in numbers" :key="index">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ninjas',

  props: {
    numbers: {
      type: Array,
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
