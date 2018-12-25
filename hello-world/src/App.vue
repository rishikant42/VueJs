<template>
  <div>
    <h2> Hello {{ name }} </h2>
    <p>{{ gretting() }}</p>
    <HelloWorld msg="Hello world"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      name: 'Rishi',
    }
  },

  methods: {
    gretting() {
      return "Welcome to vuejs tutorial"
    }
  },

  components: {
    HelloWorld: HelloWorld
  }
}
</script>
