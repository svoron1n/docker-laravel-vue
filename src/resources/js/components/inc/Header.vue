<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Laravel Vue</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav>
                    <router-link
                        v-for="link in links"
                        :key="link.url"
                        tag="b-nav-item"
                        :to="link.url"
                        active-class="active"
                    >
                        {{ link.title }}
                    </router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <b-icon icon="person-fill"></b-icon>
                            <em>User</em>
                        </template>
                        <b-dropdown-item
                            to="/profile"
                        >
                            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                            Профиль
                        </b-dropdown-item>
                        <b-dropdown-item
                            @click.prevent="logout()"
                        >
                            <b-icon icon="power" aria-hidden="true"></b-icon>
                            Выйти
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        links: [
            {title: 'Сообщения', url: '/messages'},
            {title: 'Про нас', url: '/about'},
        ]
    }),
    methods: {
        logout() {
            this.$auth.logout({
                success: function () {},
                error: function () {},
                redirect: '/login?message=logout'
            });
        }
    }
}
</script>

<style scoped>

</style>
