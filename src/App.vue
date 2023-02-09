<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
    <p>测</p>
    <img src="/public.png" />
    <img src="./assets/test.png"/>

    <div>哈哈哈</div>
</template>

<style lang="scss">
$font-color: red;

h1 {
    color: $font-color;
}
</style>