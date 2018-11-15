<template>
    <div>
        <label>User name:
            <input type="text"
                   v-model="username"
            />
        </label>
        <label>password:
            <input type="password"
                   v-model="password"
            />
        </label>
        <button v-on:click="login">login</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const user = { userName: this.userName, password: this.password }
      this.$store.dispatch('login', user)
    }
  }
}
</script>

<style scoped>

</style>
