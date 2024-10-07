<template>
    <base-header :user="user" @update:user="updateUser" />
    <slot></slot>
    <base-footer />
</template>

<script>

import BaseFooter from './BaseFooter.vue';
import BaseHeader from './BaseHeader.vue';

export default {
    name: 'BaseLayout',
    props: {
        user: Object
    },
    components: {
        BaseFooter,
        BaseHeader
    },
    emits: ['update:user'],
    methods: {
        updateUser(newUser) {
            this.$emit('update:user', newUser);
        }
    }
}
</script>




<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    margin: 0 0;
}

body {
    margin: 0;
    padding: 0;
}
</style>