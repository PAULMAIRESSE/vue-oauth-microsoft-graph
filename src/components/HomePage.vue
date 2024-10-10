<template>
    <div>
        <h1>Home Page</h1>
        <h3 v-if="user != null">Hello {{ user?.name }}</h3>
        <h3 v-else>Not logged in</h3>
        <p>Welcome to the Home Page</p>
        <animated-button style="margin: 10px;" @click="handleClick">Click me ! 👀</animated-button>
        <base-button disabled color="warn">Don't click me ! 🫣</base-button>
        <base-button :color="buttonColor" @click="handleDangerClick">Click me if you dare
            !</base-button>
        <br />
        <async-button color='warn' @click="handleAsyncClick">Click me to simulate an async operation</async-button>
    </div>
</template>

<script>
import AnimatedButton from './AnimatedButton.vue';
import BaseButton from './BaseButton.vue';
import AsyncButton from './AsyncButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'HomePage',
    components: {
        BaseButton,
        AnimatedButton,
        AsyncButton,
    },
    data: () => ({
        buttonColor: 'danger',
        asyncOperationCount: 1
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
        },
        async handleAsyncClick() {
            this.asyncOperationCount++;
            await new Promise(resolve => setTimeout(resolve, 1000 * this.asyncOperationCount)); // Simulate a delay of 2 seconds
            console.log('Async operation done');
        }
    },
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style scoped></style>