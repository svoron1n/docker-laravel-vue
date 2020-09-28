<template>
    <footer class="footer">
        <div class="container">
            <span class="text-muted">Laravel Vue {{ date | date('datetime') }}</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data: () => ({
        date: new Date(),
        interval: null
    }),
    mounted() {
        this.interval =setInterval(() => {
            this.date = new Date()
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
}
</script>

<style scoped>
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /* Set the fixed height of the footer here */
    line-height: 60px; /* Vertically center the text there */
    background-color: #f5f5f5;
}
</style>
