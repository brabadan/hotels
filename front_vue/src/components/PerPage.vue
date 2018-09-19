<template>
    <div>
        По
        <input type="number"
               v-model="perPage"
               v-on:change="onChangePerPage"
        />
        строк
    </div>
</template>

<script>

export default {
  name: 'PerPage',
  created: function () {
    this.perPage = this.$store.state.currentTable.perPage
  },
  data: function () {
    return {
      perPage: 1
    }
  },
  methods: {
    onChangePerPage: function () {
      this.$store.dispatch('onChangePerPage', this.perPage)
    }
  }
}
</script>

<style scoped lang="stylus">
input
    width 2.5em
</style>
