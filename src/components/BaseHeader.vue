<template>
    <header class="header">
        <div class="header-left">
            <base-button disabled>
                <font-awesome-icon icon="home" class="icon" />
                <span class="home-text">Home</span>
            </base-button>
        </div>
        <div class="header-right">
            <async-button disabled>
                <font-awesome-icon icon="shopping-cart" class="icon" />
                <span class="cart-text">Cart</span>
            </async-button>
            <signin-button>
                <font-awesome-icon icon="user" class="icon" />
                <span class="login-status">Not yet logged-in</span>
            </signin-button>
        </div>
    </header>
</template>

<script>

import BaseButton from './BaseButton.vue';
import AsyncButton from './AsyncButton.vue';
import SigninButton from './SigninButton.vue';


export default {
    name: 'BaseHeader',
    components: {
        BaseButton,
        AsyncButton,
        SigninButton
    },
    methods: {
        async handleLogin() {
            // simulate a login action
            // function returns a promise
            console.log('Async click handler triggered');
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds
            console.log('Async operation done');
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #5cc75f;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}

.header-left {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 10px;
}

.header-right {
    display: flex;
    align-items: center;
}

.login-status {
    margin-right: 10px;
}
</style>