<template>
  <div>
    <h1> {{ title }} </h1>
    <ninjas :name="myname"/>
    <ninjasCopy :numbers="numbers" />
  </div>
</template>

<script>
import NinjasCopy from '@/components/NinjasCopy.vue'

export default {
  components: {
    ninjasCopy: NinjasCopy,
  },

  data() {
    return {
      title: 'Ninjas App',
      myname: 'Rishi',
      numbers: [1, 2, 3],
    }
  },

}
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
