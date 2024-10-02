<template>
    <header class="header">
        <div class="header-left">
            <base-button noHoverEffect disabled>
                <font-awesome-icon icon="home" class="icon" />
                <span class="home-text">Home</span>
            </base-button>
        </div>
        <div class="header-right">
            <base-button noHoverEffect disabled>
                <font-awesome-icon icon="shopping-cart" class="icon" />
                <span class="cart-text">Cart</span>
            </base-button>
            <base-button noHoverEffect :action="handleLogin">
                <font-awesome-icon icon="user" class="icon" />
                <span class="login-status">Not yet logged-in</span>
            </base-button>
        </div>
    </header>
</template>

<script>

import BaseButton from './BaseButton.vue';


export default {
    name: 'BaseHeader',
    components: {
        BaseButton
    },
    methods: {
        handleLogin() {
            alert('Not yet implemented');
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