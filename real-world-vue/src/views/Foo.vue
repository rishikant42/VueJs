<template>
  <div class="foo">
    <h1>Foo page</h1>
    <h1>Foo {{ $route.params.id }}</h1>
    <h1>Foo {{ $route.params.username }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "foo",
  mounted() {
    console.log(this.$route)
  },
  beforeRouteUpdate (to, from, next) {
    console.log('route update');
  }
};
</script>
