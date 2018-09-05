<template>
    <div class="app-main-header">
        {{ headerText }}
    </div>
</template>

<script>
export default {
  name: 'AppMainHeader',
  props: {
    headerText: String
  }
}
</script>

<style scoped>

</style>
