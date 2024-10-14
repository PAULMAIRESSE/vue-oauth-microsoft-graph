<template>
    <div class="conversation-show-page">
        <h1>Conversation Show Page</h1>
        <div class="conversation-content">
            <div class="mail-list" v-if="mails.length">
                <div v-for="mail in mails" :key="mail.id">
                    <MailCard :email="mail" />
                </div>
            </div>
            <div class="vertical-separator" v-if="mails.length && id"></div>
            <MailDetails :mailId="id" v-if="id" />
            <p v-else-if="!mails.length">Aucun mail trouvé.</p>
        </div>
    </div>
</template>

<script>
import MailCard from '@/components/MailCard.vue';
import MailDetails from '@/components/MailDetails.vue';
import { getUserEmails } from '@/lib/microsoftGraph';
import { useToast } from 'vue-toastification';
import { mapState } from 'vuex';

export default {
    name: 'ConversationShowPage',
    components: {
        MailCard,
        MailDetails
    },
    data() {
        return {
            mails: []
        };
    },
    computed: {
        ...mapState(['user']),
        id() {
            return this.$route.params.id;
        },
    },
    methods: {
        async fetchMails() {
            try {
                getUserEmails().then(value => {
                    this.mails = value;
                });
            } catch (error) {
                const toast = useToast();
                toast.error('Erreur lors de la récupération des mails.');
            }
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (!vm.user) {
                const toast = useToast();
                toast.error('Vous devez être connecté pour accéder à cette page.');
                vm.$router.push({ name: 'Home' });
            }
        });
    },
    mounted() {
        this.fetchMails();
    }
};
</script>

<style scoped>
.conversation-show-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
}

.conversation-content {
    display: flex;
    flex-grow: 1;
    /* Make this section take the remaining space */
    overflow: hidden;
}

.mail-list {
    flex: 1;
    align-self: flex-start;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    /* make item with 10px margin between each */
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* hide scroll bar */
    scrollbar-width: thin;
}

.vertical-separator {
    width: 1px;
    background-color: #ccc;
    margin: 0 15px;
}
</style>