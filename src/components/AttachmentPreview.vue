<template>
    <div v-if="attachment" class="attachment-item">
        <!-- Check if the attachment is an image -->
        <template v-if="isImage(attachment)">
            <img :src="getAttachmentUrl(attachment)" :alt="attachment.name" class="attachment-image" />
        </template>
        <template v-else>
            <a :href="attachment.downloadUrl" target="_blank" class="attachment-file">
                <i class="file-icon"></i> {{ attachment.name }}
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
            type: Array,
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
}

.file-icon {
    width: 20px;
    height: 20px;
    background-color: #666;
    margin-right: 8px;
    display: inline-block;
    /* Use a file icon from a library or define your own */
}
</style>