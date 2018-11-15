<template>
    <div id="app">
        <div id="nav">
            <!--<router-link to="/">Home</router-link>-->
            <!--|-->
            <router-link to="/work">Main</router-link>
            |
            <router-link :to="tableLink()">
                Tables
            </router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/login">Login</router-link>
            <label v-if="this.$store.state.username"
                   id="user"
            >
                User: {{ this.$store.state.username }}
                <button v-on:click="logout">logout</button>
            </label>
        </div>
        <StatusBar/>
        <router-view/>
    </div>
</template>
<script>
import StatusBar from './components/StatusBar'
import Vue from 'vue'

console.dir(StatusBar)

export default {
  created () {
    const tables = require('../../tables.json')
    this.$store.state.tableList = tables
    this.$store.state.tableList.forEach(table => { Vue.set(this.$store.state.newRow, table.name, {}) })
    this.$store.dispatch('checkLogin')
      .catch(e => {
        console.error(e)
      })
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    tableLink () {
      const tableName = this.$store.state.currentTable.name || this.$store.state.tableList[0].name
      const page = this.$store.state.currentTable.curPage || 1
      return `/table/${tableName}/page/${page}`
    }
  },
  components: {
    StatusBar
  }
}
</script>
<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

    #nav
        padding 30px
        a
            font-weight bold
            color #2c3e50
            &.router-link-exact-active
                color #42b983

    #user
        float right
</style>
