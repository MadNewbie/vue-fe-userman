<template>
  <div>
    <nav class="nav">
      <router-link :to="{name: 'Signup'}" class="nav-link">Signup</router-link>
      <router-link :to="{name: 'Login'}" class="nav-link">Login</router-link>
    </nav>
  </div>
</template>
<script>
export default {

  data() {
    return{
      dismissSecs: 10,
      dismissCountDown: 0,
    };
  },

  message: '',

  methods: {
  },
}
</script>
<style>
  nav {
    margin: 1%
  }
</style>
