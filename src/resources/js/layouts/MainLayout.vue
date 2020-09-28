<template>
    <div>
        <Header />
        <div class="container mt-5">
            <div class="row">
                <div class="col-8">
                    <router-view />
                </div>
                <div class="col-4">
                    <Sidebar />
                </div>
            </div>
        </div>
        <Footer />
    </div>

</template>

<script>
import Header from '../components/inc/Header';
import Footer from '../components/inc/Footer';
import Sidebar from '../components/inc/Sidebar';

export default {
    name: "MainLayout",
    components: {
        Header, Footer, Sidebar
    }
}
</script>

<style scoped>

</style>
