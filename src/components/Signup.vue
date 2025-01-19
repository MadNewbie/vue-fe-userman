<template>
    <div class="wadah">
        <h1 class="text-center">Daftar Akun</h1>
        <form method="POST" @submit="onSignupSubmit">
            <div class="form-group">
                <input type="text" name="name" v-model="new_user.name" placeholder="Nama Lengkap" required class="form-control">
            </div>
            <div class="form-group">
                <input type="text" name="username" v-model="new_user.username" placeholder="Username" required class="form-control">
            </div>
            <div class="form-group">
                <input type="email" name="email" v-model="new_user.email" placeholder="Email" required class="form-control">
            </div>
            <div class="form-group">
                <input type="password" name="password" v-model="new_user.password" placeholder="Password" required class="form-control">
            </div>
            <div class="form-group">
                <input type="text" name="address" v-model="new_user.address" placeholder="Alamat" class="form-control">
            </div>
            <div class="form-group">
                <input type="text" name="phone_number" v-model="new_user.phone_number" placeholder="Nomor Telepon / HP" class="form-control">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-info">Daftar</button>
            </div>
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
                },
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
                const path = process.env.VUE_APP_BACKEND_URL+'/signup'
                axios.post(path, payload)
                    .then((res) => {
                        this.message = res.data.message
                        if (res.data.status === 'success') {
                            this.$toastr.s(this.message)
                            this.$router.replace({path: '/login'})
                        } else {
                            this.$toastr.e(this.message)
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