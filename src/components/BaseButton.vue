<template>
    <button class="button" @mousemove="handleMouseMove" @mouseleave="resetRotation" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>

export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        noHoverEffect: {
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
        handleClick(e) {
            if (this.$el.disabled) {
                e.preventDefault();
                return;
            }
            // Call the action prop function when the button is clicked
            this.action();
        }
    },
    watch: {
        disabled: function () {
            if (this.disabled) {
                this.$el.classList.add('isactive');
            } else {
                this.$el.classList.remove('isactive');
            }
            this.$el.disabled = this.disabled;
        },
        noHoverEffect: function () {
            if (this.noHoverEffect) {
                this.$el.classList.remove('clickedEffect');
            } else {
                this.$el.classList.add('clickedEffect');
            }
        }
    },
    mounted() {
        {
            this.$el.disabled = this.disabled;
            if (!this.disabled) {
                this.$el.classList.add('isactive');
            }
            if (!this.noHoverEffect) {
                this.$el.classList.add('clickedEffect');
            }
        }
    }
}
</script>

<style scoped>
.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 24px 32px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
}

.button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
}

.button:active {
    background-color: #356f37;
}

.button.isactive.clickedEffect:active {
    transform: scale(1.5) !important;
}

.button:focus {
    outline: none;
}

.button:disabled {
    background-color: #a5d6a7;
    transform: none !important;
    color: #f1f1f1;
    cursor: not-allowed;
}
</style>