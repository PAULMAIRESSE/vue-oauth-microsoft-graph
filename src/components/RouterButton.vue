<template>
    <router-link :to="to" :class="{ disabled: isDisabled }">
        <base-button :disabled="isDisabled" :color="color">
            <slot></slot>
        </base-button>
    </router-link>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'RouterButton',
    components: {
        BaseButton
    },
    props: {
        to: {
            type: [String, Object],
            required: true
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        isDisabled() {
            return this.$route.path === this.to || this.$route.name === this.to.name;
        }
    }
}
</script>

<style>
.disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>