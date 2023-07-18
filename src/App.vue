<template>
  <TheNavigation></TheNavigation>
  <main v-show="isUserAuthenticated">
    <router-view></router-view>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Laidback Lokesh', role: 'Engineer' },
        { id: 'u2', fullName: 'Martin Girish', role: 'Engineer' },
        { id: 'u3', fullName: 'Calvin Harish', role: 'Engineer' },
        { id: 'u4', fullName: 'David Gupta', role: 'Consultant' },
        { id: 'u5', fullName: 'Swadesh House Mafia', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  computed: {
    ...mapGetters(['isUserAuthenticated'])
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>