<template>
    <div class="limiter">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "EmptyLayout"
}
</script>

<style scoped>
    .limiter {
        width: 100%;
        margin: 0 auto;
        background: #e9faff;
    }
</style>
