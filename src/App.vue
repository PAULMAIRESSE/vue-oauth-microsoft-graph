<template>
  <div>
    <base-layout :user="user" @update:user="updateUser">
      <home-page :user="user" />
    </base-layout>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import BaseLayout from './components/BaseLayout.vue';

export default {
  name: 'App',
  data: () => ({
    user: null
  }),
  components: {
    HomePage,
    BaseLayout
  },
  methods: {
    updateUser(newUser) {
      this.user = newUser;
      console.log('User', this.user);
    }
  }
}
</script>

<style></style>