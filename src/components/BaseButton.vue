<template>
    <button class="button" @mousemove="handleMouseMove" @mouseleave="resetRotation" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>

export default {
    props: {
        noHoverEffect: {
            type: Boolean,
            default: false
        },
        action: {
            type: Function,
            default: () => { }
        },
        color: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'warn', 'danger'].indexOf(value) !== -1
            }
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
            this.action(this);
        },
    },
    mounted() {
        {
            this.$el.classList.add(this.color);
            if (!this.noHoverEffect) {
                this.$el.classList.add('clickedEffect');
            }
        }
    },
    watch: {
        color: function (newColor) {
            this.$el.classList.remove('primary', 'warn', 'danger');
            this.$el.classList.add(newColor);
        },
    }
}
</script>

<style scoped>
.button {
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

.button.primary {
    background-color: #5cc75f;
}

.button.warn {
    background-color: #f7b731;
}

.button.danger {
    background-color: #eb3b5a;
}

.button:hover {
    transform: translateY(-2px);
}

.button.primary:hover {
    background-color: #45a049;
}

.button.warn:hover {
    background-color: #f39c12;
}

.button.danger:hover {
    background-color: #c9302c;
}

.button.primary:active {
    background-color: #356f37;
}

.button.warn:active {
    background-color: #d35400;
}

.button.danger:active {
    background-color: #a93226;
}

.button.clickedEffect:active {
    transform: scale(1.5) !important;
}

.button:focus {
    outline: none;
}

.button:disabled,
.button:disabled:hover,
.button:disabled:active {
    transform: none !important;
    color: #f1f1f1;
    cursor: not-allowed;
}

button.primary:disabled,
button.warn:disabled:hover,
button.danger:disabled:active {
    background-color: #a5d6a7;
}

button.warn:disabled,
button.warn:disabled:hover,
button.warn:disabled:active {
    background-color: #e3dabf;
}

button.danger:disabled,
button.danger:disabled:hover,
button.danger:disabled:active {
    background-color: #d19f9b;
}
</style>