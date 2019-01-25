<template>
  <div class="bar">
    <h1>Bar</h1>
    <router-link to="/">Home</router-link> |
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "bar"
};
</script>
