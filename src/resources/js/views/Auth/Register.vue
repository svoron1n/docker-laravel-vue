<template>
    <div class="container-login">
        <div class="container">
            <div class="row">
                <div class="col-md-5 mx-auto">
                    <div class="myform form">
                        <div class="logo mb-3">
                            <div class="col-md-12 text-center">
                                <h1>Sign up</h1>
                            </div>
                        </div>
                        <b-form @submit.stop.prevent="onSubmit">
                            <b-form-group id="email-group" label="Email" label-for="email-input">
                                <b-form-input
                                    id="email-input"
                                    v-model.trim="form.email"
                                    :state="validateState('email')"
                                    aria-describedby="email-live-feedback"
                                    name="email"
                                    placeholder="Введите email"
                                ></b-form-input>

                                <b-form-invalid-feedback
                                    id="email-live-feedback"
                                >
                                    <span v-if="$v.form.email.$dirty && !$v.form.email.required">
                                        Поле Email не должно быть пустым
                                    </span>
                                    <span v-else-if="$v.form.email.$dirty && !$v.form.email.email">
                                         Введите корректный Email
                                    </span>
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group id="password-group" label="Пароль" label-for="password-input">
                                <b-form-input
                                    id="password-input"
                                    v-model.trim="form.password"
                                    :state="validateState('password')"
                                    aria-describedby="password-live-feedback"
                                    name="password"
                                    placeholder="Введите пароль"
                                ></b-form-input>

                                <b-form-invalid-feedback
                                    id="password-live-feedback"
                                >
                                    <span v-if="$v.form.password.$dirty && !$v.form.password.required">
                                        Поле Пароль не должно быть пустым
                                    </span>
                                    <span v-else-if="$v.form.password.$dirty && !$v.form.password.minLength">
                                         Пароль должен быть {{ $v.form.password.$params.minLength.min }} символов. Сейчас он {{ form.password.length }}
                                    </span>
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group id="name-group" label="Имя" label-for="name-input">
                                <b-form-input
                                    id="name-input"
                                    v-model.trim="form.name"
                                    :state="validateState('name')"
                                    aria-describedby="name-live-feedback"
                                    name="name"
                                    placeholder="Введите имя"
                                ></b-form-input>

                                <b-form-invalid-feedback
                                    id="name-live-feedback"
                                >
                                    <span v-if="$v.form.name.$dirty && !$v.form.name.required">
                                        Поле Имя не должно быть пустым
                                    </span>
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group>
                                <b-form-checkbox
                                    id="agree"
                                    v-model="form.agree"
                                    name="checkbox"
                                >
                                    я принимаю <a href="/rules">правила
                                    пользования</a>
                                </b-form-checkbox>
                            </b-form-group>

                            <b-button class="btn-block mt-2" type="submit" variant="primary">Зарегистрироваться</b-button>

                            <div class="form-group mt-3">
                                <p class="text-center">Есть аккаунт?
                                    <router-link
                                        id="signin"
                                        to="/login"
                                    >
                                        Ввойти
                                    </router-link>
                                </p>
                            </div>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {validationMixin} from 'vuelidate';
import {email, minLength, required} from 'vuelidate/lib/validators';

export default {
    name: "Register",
    mixins: [validationMixin],
    data: () => ({
        form: {
            email: null,
            password: null,
            name: null,
            agree: false
        },
        error: false,
        errors: {},
        success: false
    }),
    validations: {
        form: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(6)
            },
            name: {
                required
            },
            agree: {checked: v => v}
        }
    },
    methods: {
        validateState(name) {
            const {$dirty, $error} = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        onSubmit() {
            console.log(this.$v.form, this.$v.form.$anyError);
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }
            const formData = {
                email: this.form.email,
                password: this.form.password,
                name: this.form.name
            }

            console.log(formData);
            let app = this
            this.$auth.register({
                data: formData,
                success: function () {
                    app.success = true
                },
                error: function (resp) {
                    app.error = true;
                    app.errors = resp.response.data.errors;
                },
                redirect: null
            });

            //this.$router.push('/');
        }
    },
}
</script>

<style scoped>
body {
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    background: rgba(0, 0, 0, 0.76);
}

a {
    text-decoration: none !important;
}

h1, h2, h3 {
    font-family: 'Kaushan Script', cursive;
}

.container-login {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    /*background: #e9faff;*/
}

.myform {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    padding: 1rem;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 1.1rem;
    outline: 0;
    max-width: 500px;
}

.tx-tfm {
    text-transform: uppercase;
}

.mybtn {
    border-radius: 50px;
}

.login-or {
    position: relative;
    color: #aaa;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.span-or {
    display: block;
    position: absolute;
    left: 50%;
    top: -2px;
    margin-left: -25px;
    background-color: #fff;
    width: 50px;
    text-align: center;
}

.hr-or {
    height: 1px;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

.google {
    color: #666;
    width: 100%;
    height: 40px;
    text-align: center;
    outline: none;
    border: 1px solid lightgrey;
}

form .error {
    color: #ff0000;
}
</style>
