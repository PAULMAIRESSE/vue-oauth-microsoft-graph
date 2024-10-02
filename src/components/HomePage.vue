<template>
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page</p>
        <base-button style="margin: 10px;" :action="handleClick">Click me ! 👀</base-button>
        <base-button disabled>Don't click me ! 🫣</base-button>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'HomePage',
    components: {
        BaseButton
    },
    methods: {
        handleClick() {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }
    }
}
</script>

<style scoped></style>