<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>

export default {
    props: {
        color: {
            type: String,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'secondary', 'warn', 'danger'].indexOf(value) !== -1
            }
        }
    },
    mounted() {
        {
            this.$el.classList.add(this.color);
        }
    },
    watch: {
        color: function (newColor) {
            this.$el.classList.remove('primary', 'secondary', 'warn', 'danger');
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

.button.secondary {
    background-color: #42b983;
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

.button.secondary:hover {
    background-color: #2c7a7b;
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

.button.secondary:active {
    background-color: #1e5f5b;
}

.button.warn:active {
    background-color: #d35400;
}

.button.danger:active {
    background-color: #a93226;
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
button.primary:disabled:hover,
button.primary:disabled:active {
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

button.secondary:disabled,
button.secondary:disabled:hover,
button.secondary:disabled:active {
    background-color: #a3c4bc;
}
</style>