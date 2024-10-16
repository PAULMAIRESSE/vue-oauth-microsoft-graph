<template>
    <a href="#" @click.prevent="showEmail = !showEmail">{{ showEmail ? emailAddress.name :
        emailAddress.address }}</a>
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