Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
      <div class="product">

        <div class="product-image">
          <img :src="image" :alt="altText" />
        </div>

        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of stock</p>

          <p v-show="inSale">Product is in sale</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div class="color-box"
               v-for="(variant, index) in variants"
               :key="variant.variantId"
               :style="{ backgroundColor: variant.variantColor }"
               v-on:mouseover="updateImage(index)"
               >
          </div>

          <p>Shipping: {{ shipping }} </p>

          <button @click="addToCart" 
               :disabled="!inStock"
               :class="{disabledButton: !inStock}"
            >
            Add to cart</button>

        </div>

      </div>

  `,

  data() {
    return {
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
      selectedVariant: 0,
    }
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
    },

    shipping() {
      if(this.premium) {
        return "free"
      } else {
        return "100 rs"
      }
    },
  },
})


var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  },
})
