export default {
    install(Vue, options) {
        Vue.prototype.$message = function (text) {
            this.$bvToast.toast(text, {
                variant: 'success',
                noCloseButton: true
            });
        }

        Vue.prototype.$error = function (text) {
            this.$bvToast.toast(text, {
                title: 'Ошибка',
                variant: 'danger'
            });
        }
    }
}
