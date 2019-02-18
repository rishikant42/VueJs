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
      if (event) {
        console.log(event);
        event.preventDefault()
      }
      alert(message)
    },
    testPreventDefault(e) {
      // use of js
      e.preventDefault()
    },

    testPrevent(e) {
      // vue method
      console.log("prevent");
    },

    testOnce(e) {
      console.log("Once");
    },
  }
})
