<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
    <img src="./assets/test.png"/>
</template>

<style lang="scss">
$font-color: red;

h1 {
    color: $font-color;
}
</style>