var app = new Vue({
  el: '#app',
  data: {
    message1: 'msg1',
    message2: 'msg2',
    checked: false,
    checkedNames: [],
    picked: null,
    selected: '',
    multiselected: [],
    dyselected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
  }
})
