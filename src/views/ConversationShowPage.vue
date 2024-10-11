<template>
    <div>
        <h1>Conversation Show Page</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ConversationShowPage',
    computed: {
        ...mapState(['user'])
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (!vm.user) {
                console.log('User is not logged in. Redirecting to Home page.');
                vm.$router.push({ name: 'Home', replace: true });
            }
        });
    }
};
</script>

<style scoped></style>