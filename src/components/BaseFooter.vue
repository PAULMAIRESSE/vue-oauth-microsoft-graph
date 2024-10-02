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
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer a {
    color: lightblue;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}
</style>