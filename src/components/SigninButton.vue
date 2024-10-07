<template>
    <async-button color='primary' @click="signInAndGetUser">Sign in</async-button>
</template>

<script setup>
import AsyncButton from './AsyncButton.vue';
import { signInAndGetUser } from '@/lib/microsoftGraph';
</script>
