<template>
    <header class="header">
        <div class="header-left">
            <font-awesome-icon icon="home" class="icon" />
            <span class="home-text">Home</span>
        </div>
        <div class="header-right">
            <font-awesome-icon icon="user" class="icon" />
            <span class="login-status">Not yet logged-in</span>
        </div>
    </header>
</template>

<script>
export default {
    name: 'BaseHeader'
}
</script>

<style scoped>
.header {
    background-color: #4CAF50;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}

.header-left {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 10px;
}

.header-right {
    display: flex;
    align-items: center;
}

.login-status {
    margin-right: 10px;
}
</style>