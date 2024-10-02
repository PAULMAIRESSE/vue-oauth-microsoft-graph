<template>
    <base-button :color="color" :disabled="disabled" @mousemove="handleMouseMove" @mouseleave="resetRotation">
        <slot></slot>
    </base-button>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'AnimatedButton',
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
        },
        action: {
            type: Function,
            default: () => { }
        }
    },
    methods: {
        handleMouseMove(e) {
            // check if the button is disabled
            if (this.$el.disabled || this.noHoverEffect) {
                return;
            }
            const button = e.currentTarget;
            const rect = button.getBoundingClientRect();

            // Get the position of the mouse relative to the center of the button
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Calculate rotation angles (scale the effect with some divisor)
            const rotateX = -(y / rect.height) * 70; // Rotate up/down
            const rotateY = (x / rect.width) * 70; // Rotate left/right

            // Apply 3D rotation
            button.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        },
        resetRotation(e) {
            // Reset rotation when the mouse leaves the button
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        },
    }
}
</script>

<style scoped>
.button:active {
    transform: scale(1.25) !important;
}
</style>