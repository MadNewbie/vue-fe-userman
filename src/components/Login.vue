<template>
    <div class="wadah">
        <h1 class="text-center">Login</h1>
        <form method="POST" @submit="onLoginSubmit">
            <div class="form-group">
                <input type="text" name="username" v-model="user.username" placeholder="Username" required class="form-control">
            </div>
            <div class="form-group">
                <input type="password" name="password" v-model="user.password" placeholder="Password" required class="form-control">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-info">Masuk</button>
            </div>
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
            const path = process.env.VUE_APP_BACKEND_URL+'/login'
            axios.post(path, payload)
                .then((res) => {
                    this.message = res.data.message
                    if (res.data.status === "success") {
                        this.$toastr.s(this.message)
                        this.$router.replace({path: '/'})
                    } else {
                        this.$toastr.e(this.message)
                        this.user.password = ''
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    },

    mounted() {
        console.log("API URL:", process.env.VUE_APP_BACKEND_URL); // Debugging check
    },
}
</script>