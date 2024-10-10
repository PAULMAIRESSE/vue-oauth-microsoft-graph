<template>
    <async-button color='primary' @click="signInAndGetUser">Sign in</async-button>
</template>

<script>
import store from '@/lib/store';
import AsyncButton from './AsyncButton.vue';
import { signInAndGetUser } from '@/lib/microsoftGraph';

export default {
    name: 'SigninButton',
    components: {
        AsyncButton
    },
    methods: {
        async signInAndGetUser() {
            const user = await signInAndGetUser();
            // mutate the user prop
            store.commit('setUser', user);
        }
    }
}
</script>
