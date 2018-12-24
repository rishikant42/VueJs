var app = new Vue({
  el: '#app',

  data: {
    product: 'Vue Socks',
    altText: 'Socks-image',
    image: './assets/vmSocks-blue.jpg',
    inStock: true,
    inSale: false,
    details: ["Apple", "Boy", "Cat"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
      },
    ],
  },
})
