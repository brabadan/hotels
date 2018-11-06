<template>
    <div class="app-main-side">
        <strong>Режим работы:</strong>
        <ul>
            <li v-for="(link, index) in links"
                v-bind:key="index"
                v-on:click="onClick(link.link)"
                v-bind:class="$route.path.endsWith(link.link) ? 'current-li' : ''"
            >
                {{ link.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AppMainSide',
  props: {
    links: Array
  },
  methods: {
    onClick (link) {
      console.dir(this.$router)
      this.$router.replace(link)
    }
  }
}
</script>

<style scoped lang="stylus">
ul
    list-style none
    li
        background-color antiquewhite
        margin 1px
    li:hover
        cursor pointer
        background-color aqua
    li.current-li
        font-size larger
        color brown
</style>
