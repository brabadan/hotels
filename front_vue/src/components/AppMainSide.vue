<template>
    <div class="app-main-side">
        <strong>Режим работы:</strong>
        <ul>
            <li v-for="(link, index) in links"
                v-bind:key="index">{{ link.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AppMainSide',
  props: {
    links: Array
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

</style>
