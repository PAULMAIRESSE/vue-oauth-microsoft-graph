<template>
    <div class="mail-details">
        <h2>Détails du Mail</h2>
        <div v-if="mail">
            <div class="mail-head">
                <strong>De :</strong> <mail-address-details :emailAddress="mail.sender.emailAddress" />
                <p><strong>Sujet :</strong> {{ mail.subject }}</p>
                <p><strong>À :</strong> <mail-address-details v-for="recipient in mail.toRecipients"
                        v-bind:key="recipient.emailAddress.address" v-bind:emailAddress="recipient.emailAddress" />
                </p>
                <p><strong>Date :</strong> {{ formatDate(mail.receivedDateTime) }}</p>
            </div>
            <div class="mail-body" v-html="mailBody"></div>
            <div class="mail-attachment">
                <div v-if="loadingAttachments">Chargement des pièces jointes...</div>
                <div v-else-if="attachments.length && mail.hasAttachments">
                    <h3>Pièces jointes</h3>
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
import MailAddressDetails from './MailAddressDetails.vue';
import { formatRelative } from 'date-fns'

export default {
    name: 'MailDetails',
    props: {
        mailId: {
            type: String,
            required: true
        }
    },
    components: {
        AttachmentPreview,
        MailAddressDetails
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
                    this.processInlineImages();
                }).catch(error => {
                    console.error('Erreur lors de la récupération des pièces jointes', error);
                    this.loadingAttachments = false; // Ensure loading state is reset on error
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du mail', error);
            }
        },
        processInlineImages() {
            console.log('Processing inline images');
            if (!this.mail || !this.mail.body || !this.mail.body.content) return;

            let content = this.mail.body.content;
            const cidRegex = /cid:([^'">]+)/g;
            let match;

            while ((match = cidRegex.exec(content)) !== null) {
                const cid = match[1];
                const attachment = this.attachments.find(att => att.contentId === cid);
                if (attachment) {
                    const attachmentUrl = `data:${attachment.contentType};base64,${attachment.contentBytes}`;
                    content = content.replace(`cid:${cid}`, attachmentUrl);
                    // flag the attachment as processed
                    attachment.processed = true;
                }
            }

            // remove all processed attachments from the list
            this.attachments = this.attachments.filter(att => !att.processed);

            this.mail.body.content = content;
        },
        formatDate(date) {
            return formatRelative(new Date(date), new Date());
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
    text-align: left;
}

.mail-details>h2 {
    margin-top: 0;
}

.mail-head {
    margin-bottom: 20px;
}

.mail-head>p {
    margin: 0;
}

.mail-body>* {
    overflow-wrap: break-word;
}

.mail-attachment {
    margin-top: 20px;
}
</style>