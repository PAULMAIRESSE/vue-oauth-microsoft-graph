<template>
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page</p>
        <base-button style="margin: 10px;" :action="handleClick">Click me ! 👀</base-button>
        <base-button disabled color="warn">Don't click me ! 🫣</base-button>
        <base-button noHoverEffect :color="buttonColor" :action="handleDangerClick">Click me if you dare
            !</base-button>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import { ref } from 'vue';

const buttonColor = ref('danger');

export default {
    name: 'HomePage',
    components: {
        BaseButton
    },
    data: () => ({
        buttonColor
    }),
    methods: {
        handleClick() {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        },
        handleDangerClick() {
            // make the props enumerate through the array of colors 
            const colors = ['primary', 'warn', 'danger'];
            const currentColor = this.buttonColor;
            const currentIndex = colors.indexOf(currentColor);
            const nextIndex = (currentIndex + 1) % colors.length;
            this.buttonColor = colors[nextIndex];
        }
    }
}
</script>

<style scoped></style>