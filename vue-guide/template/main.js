
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello',
    rawHtml: '<span style="color:red">RED {{ message }}</span>',
    isButtonDisabled: null,
    number: 2,
    ok: true,
  }
});
