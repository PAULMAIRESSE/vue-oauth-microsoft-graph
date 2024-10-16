<template>
    <div class="mail-card" @click="redirectToConversation">
        <h3>{{ email.subject }}</h3>
        <p><strong>From:</strong> {{ email.sender.emailAddress.name }}</p>
        <p><strong>Received:</strong> {{ formatDate(email.receivedDateTime) }}</p>
        <p>{{ email.bodyPreview }}</p>
    </div>
</template>

<script>
import { formatRelative } from 'date-fns';

export default {
    name: 'MailCard',
    props: {
        email: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate(date) {
            return formatRelative(new Date(date), new Date());
        },
        redirectToConversation() {
            this.$router.push({ name: 'ConversationShow', params: { id: this.email.id } });
        }
    },
    mounted() {
        console.log(this.email);
    }
}
</script>

<style scoped>
.mail-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 4px;
    background-color: #f9f9f9;
    text-align: left;
}

.mail-card:hover {
    cursor: pointer;
    background-color: #f0f0f0;
}

.mail-card h3 {
    margin: 0 0 8px;
}

.mail-card p {
    margin: 4px 0;
}
</style>