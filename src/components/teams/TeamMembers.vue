<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <UserItem
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></UserItem>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []``
    };
  },
  created() {
    const teamId = this.$route.params.teamId;
    this.teamName = this.$route.params.teamId;
    const teamMemberIds = this.teams.find(team => team.id === teamId).members;
    const teamMembers = this.users.filter(user => teamMemberIds.includes(user.id));
    console.log(teamMembers, 'teamMembers');
    this.members = teamMembers
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>