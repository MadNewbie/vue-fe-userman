<template>
    <div>
        <h1>Daftar Akun</h1>
        <form method="POST" @submit="onSignupSubmit">
            <input type="text" name="name" v-model="new_user.name" placeholder="Nama Lengkap" required>
            <input type="text" name="username" v-model="new_user.username" placeholder="Username" required>
            <input type="email" name="email" v-model="new_user.email" placeholder="Email" required>
            <input type="password" name="password" v-model="new_user.password" placeholder="Password" required>
            <input type="text" name="address" v-model="new_user.address" placeholder="Alamat">
            <input type="text" name="phone_number" v-model="new_user.phone_number" placeholder="Nomor Telepon / HP">
            <button type="submit">Daftar</button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                new_user: {
                    'name': '',
                    'username': '',
                    'email': '',
                    'password': '',
                    'address': '',
                    'phone_number': ''
                }
            }
        },

        message:'',

        methods: {
            onSignupSubmit(e) {
                e.preventDefault()
                const payload = {
                    name: this.new_user.name,
                    username: this.new_user.username,
                    email: this.new_user.email,
                    password: this.new_user.password,
                    address: this.new_user.address,
                    phone_number: this.new_user.phone_number,
                }
                this.signUp(payload)
            },
            signUp(payload) {
                const path = 'http://localhost:5000/signup'
                axios.post(path, payload)
                    .then((res) => {
                        this.message = res.data.message
                        if (res.data.status === 'success') {
                            this.$router.replace({path: '/login'})
                        } else {
                            this.$router.reload
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            },
        },
    }
</script>