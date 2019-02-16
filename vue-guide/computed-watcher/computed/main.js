var app = new Vue({
  el: '#app',
  data: {
    msg: null,
    message: 'world'
  },
  methods: {
    reverseMessage: function () {
      this.msg = Date.now()
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    seen() {
      return false;
    },
    now: function () {
      return Date.now()
    }
  }
})
