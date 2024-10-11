<template>
  <div>
    <base-layout>
      <router-view />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    BaseLayout,
  },
}
</script>

<style></style>