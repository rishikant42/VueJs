var app = new Vue({
  el: '#app',
  data: {
    counter:0,
    name: 'evan you',
  },
  methods: {
    greet() {
      alert('Hello ' + this.name + '!');

      if (event) {
        console.log(event);
      }
    },
    say(msg) {
      alert(msg);
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) event.preventDefault()
      alert(message)
  }
  }
})
