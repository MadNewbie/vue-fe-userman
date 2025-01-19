<template>
  <div>
    <router-link :to="{name: 'Signup'}">Signup</router-link>
    <router-link :to="{name: 'Login'}">Login</router-link>
  </div>
</template>
<script>
import axios from 'axios';

export default {

  data() {
    return{
      members:[],
    };
  },

  message: '',

  methods: {
  },
}
</script>
