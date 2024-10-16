<template>
    <div class="mail-details">
        <h2>Détails du Mail</h2>
        <div v-if="mail">
            <p><strong>De :</strong> {{ mail.sender.emailAddress.name }}</p>
            <p><strong>À :</strong> {{ mail.toRecipients.map(recipient => recipient.emailAddress.name).join(', ') }}</p>
            <p><strong>Sujet :</strong> {{ mail.subject }}</p>
            <p><strong>Date :</strong> {{ formatDate(mail.receivedDateTime) }}</p>
            <div class="mail-body" v-html="mailBody"></div>
            <div class="mail-attachment">
                <div v-if="loadingAttachments">Chargement des pièces jointes...</div>
                <div v-else-if="attachments.length">
                    <h3>Pièces jointes</h3>
                    <p>Nombres de pièces jointes : {{ attachments.length }}</p>
                    <attachment-preview v-for="attachment in attachments" v-bind:key="attachment.id"
                        v-bind:attachment="attachment" />
                </div>
                <p v-else>Pas de pièces jointes</p>
            </div>
        </div>
        <p v-else>Chargement des détails du mail...</p>
    </div>
</template>

<script>
import { getMailDetails } from '@/lib/microsoftGraph';
import AttachmentPreview from './AttachmentPreview.vue';

export default {
    name: 'MailDetails',
    props: {
        mailId: {
            type: String,
            required: true
        }
    },
    components: {
        AttachmentPreview
    },
    data() {
        return {
            mail: null,
            attachments: [],
            loadingAttachments: true
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
                const { data, attachments: attachmentsPromise } = await getMailDetails(this.mailId);
                this.mail = data;
                this.attachments = []; // Reset attachments
                this.loadingAttachments = true; // Mark loading as in progress

                // Handle attachments as a promise
                attachmentsPromise.then(attachments => {
                    console.log('Attachments loaded');
                    this.attachments = attachments;
                    this.loadingAttachments = false; // Mark loading as done
                }).catch(error => {
                    console.error('Erreur lors de la récupération des pièces jointes', error);
                    this.loadingAttachments = false; // Ensure loading state is reset on error
                });
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

.mail-attachment {
    margin-top: 20px;
}
</style>