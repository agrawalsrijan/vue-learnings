<template>
  <div class="hello">
    <h1>{{ $store.state.counter }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <TheCounterList/>
  </div>
</template>

<script>
import TheCounterList from './TheCounterList.vue';
export default {
  name: 'TheCounter',
  components: {
    TheCounterList
  },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
    decrement() {
      this.$store.state.counter--;
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