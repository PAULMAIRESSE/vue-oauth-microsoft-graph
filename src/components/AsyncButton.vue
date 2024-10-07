<template>
    <base-button :color="color" :disabled="disabled || isPending" @click.stop.prevent="handleClick">
        <font-awesome-icon v-if="isPending" pulse :icon="['fas', 'spinner']" />
        <slot></slot>
    </base-button>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'AsyncButton',
    inheritAttrs: false,
    components: {
        BaseButton
    },
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isPending: false
        }
    },
    methods: {
        async handleClick() {
            const originalClick = /** @type {() => Promise<void>} **/(this.$attrs['onClick'] || (async () => { }));
            console.log(originalClick);
            this.isPending = true;
            originalClick().finally(() => {
                this.isPending = false;
            });
        }
    }
}
</script>

<style scoped>
svg {
    margin-right: 10px;
}
</style>