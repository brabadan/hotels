<template>
    <div v-show="!this.$store.state.statusBar.hidden">
        {{ this.$store.state.statusBar.text }}
    </div>
</template>

<script>
export default {
  name: 'statusBar'
}
</script>

<style scoped lang="stylus">
div
    border red 1px solid
    border-radius 4px
</style>
