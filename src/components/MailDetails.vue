<template>
    <div class="mail-details">
        <h2>Détails du Mail</h2>
        <div v-if="mail">
            <p><strong>De :</strong> {{ mail.sender.emailAddress.name }}</p>
            <p><strong>À :</strong> {{ mail.toRecipients.map(recipient => recipient.emailAddress.name).join(', ') }}</p>
            <p><strong>Sujet :</strong> {{ mail.subject }}</p>
            <p><strong>Date :</strong> {{ formatDate(mail.receivedDateTime) }}</p>
            <div class="mail-body" v-html="mailBody"></div>
        </div>
        <p v-else>Chargement des détails du mail...</p>
    </div>
</template>

<script>
import { getMailDetails } from '@/lib/microsoftGraph';

export default {
    name: 'MailDetails',
    props: {
        mailId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            mail: null
        };
    },
    watch: {
        mailId: 'fetchMailDetails'
    },
    mounted() {
        this.fetchMailDetails();
    },
    methods: {
        async fetchMailDetails() {
            try {
                this.mail = await getMailDetails(this.mailId);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du mail', error);
            }
        },
        formatDate(date) {
            return new Date(date).toLocaleString();
        },
    },
    computed: {
        mailBody() {
            // remove js script tags
            const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            let content = this.mail?.body.content;
            if (content) {
                content = content.replace(scriptRegex, '');
            }
            return content;
        }
    }
};
</script>

<style scoped>
.mail-details {
    flex: 1;
    background-color: #f9f9f9;
    border-left: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
}

.mail-body>* {
    overflow-wrap: break-word;
}
</style>