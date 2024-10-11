<template>
    <async-button color='secondary' @click="signInAndGetUser">{{ user != null ? 'Sign out' : 'Sign in'
        }}</async-button>
</template>

<script>
import store from '@/lib/store';
import AsyncButton from './AsyncButton.vue';
import { signInAndGetUser, signOut } from '@/lib/microsoftGraph';
import { mapState } from 'vuex';

export default {
    name: 'SigninButton',
    components: {
        AsyncButton
    },
    methods: {
        async signInAndGetUser() {
            if (this.user != null) {
                // sign out
                await signOut();
                store.commit('setUser', null);
            } else {
                // sign in
                const user = await signInAndGetUser();
                store.commit('setUser', user);
            }
        }
    },
    computed: {
        ...mapState(['user'])
    }
}
</script>
