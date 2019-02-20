Vue.component('btn-counter', {
  data() {
    return {
      count: 0,
    }
  },
  template: '<button @click="count++"> count: {{ count }} </button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

Vue.component('bg-post', {
  props: ['post'],
  template: `
      <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.9)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

Vue.component('alert-box', {
  template: `
  <div class="demo-alert-box">
  <strong>Error</strong>
  <slot></slot>
  </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello',
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    newposts: [
      { id: 4, title: 't1', content: 'c1' },
      { id: 5, title: 't2', content: 'c2' },
      { id: 6, title: 't3', content: 'c3' },
    ],
    postFontSize: 1,
    searchText: '',
  },
  methods: {
    onEnlargeText(value) {
      this.postFontSize += value;
    }
  }
})
