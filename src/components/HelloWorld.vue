<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>Count = {{ count }}</p>
    <p v-for="number in getArrayTillCount()" :key="number">{{ number }}</p>
    <p>Learn more at <a v-bind:href="githubLink">agrawalsrijan</a> github.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    count: Number,
    githubLink: String,
  },
  methods: {
    increment() {
      this.$emit('increment');
    },
    decrement() {
      this.$emit('decrement');
    },
    getArrayTillCount: function () {
      return Array.from({ length: this.count }, (_, index) => index + 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

button {
  margin: 5px;
  width: 40px;
  height: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>