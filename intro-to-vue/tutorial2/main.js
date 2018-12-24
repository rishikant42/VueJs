var app = new Vue({
  el: '#app',

  data: {
    product: 'Socks',
    brand: 'Vue mastery',
    altText: 'Socks-image',
    // image: './assets/vmSocks-blue.jpg',
    // inStock: true,
    inSale: false,
    details: ["Apple", "Boy", "Cat"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 100,
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 0,
      },
    ],
    cart: 0,
    selectedVariant: 0,
  },

  methods: {
    addToCart() {
      this.cart += 1
    },

    updateImage(index) {
      this.selectedVariant = index
    },
  },

  computed: {
    title() {
      return this.brand + ' ' + this.product
    },

    image() {
      return this.variants[this.selectedVariant].variantImage
    },

    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  },
})
