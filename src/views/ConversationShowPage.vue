<template>
    <div>
        <h1>Conversation Show Page</h1>
        <div class="conversation-show-page">
            <div class="mail-list" v-if="mails.length">
                <ul>
                    <li v-for="mail in mails" :key="mail.id">
                        <MailCard :email="mail" />
                    </li>
                </ul>
            </div>
            <div class="mail-details" v-if="id">
                <MailDetails :mailId="id" />
            </div>
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
ul {
    list-style-type: none;
    padding: 0;
}

.conversation-show-page {
    display: flex;
}

.mail-list {
    flex: 1;
    padding: 10px;
}

.mail-details {
    flex: 2;
    padding: 10px;
    border-left: 1px solid #ccc;
}
</style>