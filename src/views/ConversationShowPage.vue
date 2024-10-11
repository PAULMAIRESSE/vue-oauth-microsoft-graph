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
    created() {
        if (!this.user) {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped></style>