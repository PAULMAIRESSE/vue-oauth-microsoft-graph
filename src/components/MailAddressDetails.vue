<template>
    <a href="#" @click.prevent="showEmail = !showEmail">{{ showEmail ? emailAddress.address :
        emailAddress.name }}</a>
</template>

<script>
export default {
    props: {
        emailAddress: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showEmail: false
        };
    }
};
</script>

<style scoped></style>