<template>
    <footer class="footer">
        <p>
            This work is protected by international laws | © 2021 |
            <a href="https://thomas-veillard.fr" target="_blank">thomas-veillard.fr</a>
        </p>
    </footer>
</template>

<script>
export default {
    name: 'BaseFooter'
}
</script>

<style scoped>
.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    bottom: 0;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer a {
    color: lightblue;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}
</style>