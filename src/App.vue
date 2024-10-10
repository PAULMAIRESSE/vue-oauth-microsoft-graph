<template>
  <div>
    <base-layout>
      <home-page />
    </base-layout>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import BaseLayout from './components/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    BaseLayout
  }
}
</script>

<style></style>