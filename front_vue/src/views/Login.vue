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
                   v-on:keyup="onEnter"
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
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const user = { username: this.username, password: this.password }
      this.$store.dispatch('login', user)
        .then(() => {
          this.username = this.password = ''
        })
    },
    onEnter (ev) {
      if (ev.key === 'Enter') this.login()
    }
  }
}
</script>

<style scoped>

</style>
