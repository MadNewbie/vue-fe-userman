<template>
    <div>
        <h1>Login</h1>
        <form method="POST" @submit="onLoginSubmit">
            <input type="text" name="username" v-model="user.username" placeholder="Username" required>
            <input type="password" name="password" v-model="user.password" placeholder="Password" required>
            <button type="submit">Masuk</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: {
                'username': '',
                'password': ''
            }
        }
    },

    message: '',

    methods: {
        onLoginSubmit(e) {
            e.preventDefault()
            const payload = {
                username: this.user.username,
                password: this.user.password
            }
            this.logIn(payload)
        },

        logIn(payload) {
            const path = 'http://localhost:5000/login'
            axios.post(path, payload)
                .then((res) => {
                    this.message = res.data.message
                    if (res.data.status === "success") {
                        this.$router.replace({path: '/'})
                    } else {
                        this.user.password = ''
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    },
}
</script>