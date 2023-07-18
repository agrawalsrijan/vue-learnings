<template>
  <header>
    <nav>
      <ul>
        <li v-show="isUserAuthenticated">
          <RouterLink to="/teams">Teams</RouterLink>
        </li>
        <li v-show="isUserAuthenticated">
          <RouterLink to="/users">Users</RouterLink>
        </li>
        <li v-show="isUserAuthenticated">
          <RouterLink to="/counter">Counter</RouterLink>
        </li>
        <li v-show="!isUserAuthenticated">
          <button @click="login">Login</button>
        </li>
        <li v-show="isUserAuthenticated">
          <button @click="logout">Logout</button>
        </li>
      </ul>
      <ul>

      </ul>
    </nav>
  </header>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['isUserAuthenticated'])
  }
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a,
button {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>