<template>
    <header class="header">
        <div class="header-left">
            <router-button to="/" color="secondary">
                <font-awesome-icon icon="home" class="icon" />
                <span>Home</span>
            </router-button>
            <router-button to="/conversations" color="secondary" v-if="user != null">
                <font-awesome-icon icon="home" class="icon" />
                <span>Conversation</span>
            </router-button>
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
import AsyncButton from './AsyncButton.vue';
import SigninButton from './SigninButton.vue';
import RouterButton from './RouterButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'BaseHeader',
    components: {
        AsyncButton,
        SigninButton,
        RouterButton
    },
    computed: {
        ...mapState(['user'])
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