<template>
    <tbody>
    <tr v-for="row in getTableRows"
        v-bind:key="row.number"
    >
        <td>{{ row.number }}</td>
        <td v-for="(column, index) in row.columns"
            v-bind:key="index"
        >
            {{ column }}
        </td>
    </tr>
    </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ViewTablePage',
  computed: {
    ...mapGetters([
      'getTableRows'
    ])
  }
}
</script>

<style scoped lang="stylus">
td
    border 1px solid
</style>
