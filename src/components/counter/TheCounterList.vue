<template>
    <div class="hello">
        <p v-for="number in getArrayTillCount" :key="number">List Item - {{ number }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'TheCounterList',
    computed: {
        getArrayTillCount: function () {
            return Array.from({ length: this.$store.state.counter }, (_, index) => index + 1);
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
}
</style>