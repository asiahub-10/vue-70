<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const message = ref('');

const submitLogin = () => {
    message.value = 'Login is not connected to an authentication service yet.';
};
</script>

<template>
    <main class="login-page">
        <section class="login-card" aria-labelledby="login-title">
            <a class="login-brand" href="/" aria-label="AdminPro home">
                <span class="brand-icon"><i class="bi bi-bar-chart-fill"></i></span>
                <span>AdminPro</span>
            </a>

            <div class="login-heading">
                <h1 id="login-title">Welcome back</h1>
                <p>Sign in to continue to your account.</p>
            </div>

            <form @submit.prevent="submitLogin">
                <div class="mb-3">
                    <label class="form-label" for="email">Email address</label>
                    <input
                        id="email"
                        v-model="email"
                        class="form-control"
                        type="email"
                        autocomplete="username"
                        placeholder="you@example.com"
                        required
                    >
                </div>

                <div class="mb-3">
                    <div class="password-label">
                        <label class="form-label mb-0" for="password">Password</label>
                    </div>
                    <input
                        id="password"
                        v-model="password"
                        class="form-control"
                        type="password"
                        autocomplete="current-password"
                        placeholder="Enter your password"
                        required
                    >
                </div>

                <div class="login-options">
                    <label class="remember-option">
                        <input class="form-check-input" type="checkbox">
                        <span>Remember me</span>
                    </label>
                </div>

                <p v-if="message" class="alert alert-info py-2" role="status">{{ message }}</p>

                <button class="btn btn-primary w-100 login-submit" type="submit">
                    Sign in
                </button>
            </form>

            <p class="login-footer">Secure access to your AdminPro dashboard</p>
        </section>
    </main>
</template>

<style scoped>
.login-page {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 2rem 1rem;
}

.login-card {
    width: min(100%, 440px);
    padding: clamp(1.75rem, 6vw, 2.75rem);
    border: 1px solid #e8ebf2;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 0 1.25rem 3.5rem rgb(35 48 73 / 10%);
}

.login-brand {
    display: inline-flex;
    align-items: center;
    gap: .65rem;
    color: #202b3c;
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
}

.brand-icon {
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    place-items: center;
    border-radius: .75rem;
    background: #0d6efd;
    color: #fff;
}

.login-heading {
    margin: 2.5rem 0 1.75rem;
}

.login-heading h1 {
    margin-bottom: .5rem;
    color: #202b3c;
    font-size: 1.75rem;
    font-weight: 700;
}

.login-heading p,
.login-footer {
    margin-bottom: 0;
    color: #6c757d;
}

.form-label {
    margin-bottom: .5rem;
    color: #344054;
    font-weight: 600;
}

.form-control {
    min-height: 3rem;
    border-color: #dce1ea;
    border-radius: .6rem;
}

.form-control:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .2rem rgb(13 110 253 / 12%);
}

.login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .75rem;
    margin: 1rem 0 1.5rem;
    font-size: .9rem;
}

.remember-option {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    color: #495057;
}

.remember-option .form-check-input {
    margin: 0;
}

.login-submit {
    min-height: 3rem;
    border-radius: .6rem;
    font-weight: 600;
}

.login-footer {
    margin-top: 1.75rem;
    text-align: center;
    font-size: .85rem;
}
</style>
