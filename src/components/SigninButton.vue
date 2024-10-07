<template>
    <async-button color='primary' @click="signInAndGetUser">Sign in</async-button>
</template>

<script>
import AsyncButton from './AsyncButton.vue';
import { signInAndGetUser } from '@/lib/microsoftGraph';

export default {
    name: 'SigninButton',
    components: {
        AsyncButton
    },
    props: {
        user: Object
    },
    methods: {
        async signInAndGetUser() {
            const user = await signInAndGetUser();
            // mutate the user prop
            this.$emit('update:user', user);
        }
    },
    emits: ['update:user', 'test']
}
</script>
