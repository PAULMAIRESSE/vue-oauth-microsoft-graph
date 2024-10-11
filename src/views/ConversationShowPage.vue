<template>
    <div>
        <h1>Conversation Show Page</h1>
        <p v-if="id !== undefined">Conversation ID: {{ id }}</p>
    </div>
</template>

<script>
import { useToast } from 'vue-toastification';
import { mapState } from 'vuex';

export default {
    name: 'ConversationShowPage',
    computed: {
        ...mapState(['user']),
        id() {
            return this.$route.params.id;
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (!vm.user) {
                const toast = useToast();
                toast.error('Vous devez être connecté pour accéder à cette page.');
                //vm.$router.push({ name: 'Home' });
            }
        });
    },
};
</script>

<style scoped></style>