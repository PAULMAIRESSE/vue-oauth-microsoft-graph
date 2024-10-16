<template>
    <div v-if="attachment" class="attachment-item">
        <!-- Check if the attachment is an image -->
        <template v-if="isImage(attachment)">
            <img :src="getAttachmentUrl(attachment)" :alt="attachment.name" class="attachment-image" />
        </template>
        <template v-else>
            <a :href="getAttachmentUrl(attachment)" target="_blank" class="attachment-file">
                <font-awesome-icon icon="fa-solid fa-file" class="file-icon" />{{ attachment.name }}
            </a>
        </template>
    </div>
    <div v-else>
        <p>No attachments found</p>
    </div>
</template>

<script>
export default {
    props: {
        attachment: {
            type: Object,
            required: true
        }
    },
    methods: {
        isImage(attachment) {
            console.log(attachment.contentType);
            // Check if the MIME type of the attachment starts with 'image/'
            return attachment.contentType.startsWith('image/');
        },
        getAttachmentUrl(attachment) {
            // Create a data URL from the base64 content
            return `data:${attachment.contentType};base64,${attachment.contentBytes}`;
        }
    }
}
</script>

<style scoped>
.attachment-item {
    margin-bottom: 10px;
}

.attachment-image {
    max-width: 200px;
    max-height: 200px;
    display: block;
    margin-bottom: 5px;
}

.attachment-file {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    text-decoration: underline;
}

.file-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    display: inline-block;
}
</style>