<template>
    <div class="app-main">
        {{ message }}
        <table>
            <caption>Список отелей</caption>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                </tr>
            </thead>
            <tr v-for="(hotel, index) in hotels"
                :key="index"
            >
                <td>{{ index + 1 }}</td>
                <td>{{ hotel }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'HotelsMain',
  data () {
    return {
      message: 'Это суперпрога про отели',
      hotels: ['first', 'second', 'third']
    }
  }
}

</script>

<style scoped lang="stylus">
table
    margin-left auto
    margin-right auto
    border-collapse collapse
    td, th
        border 1px solid
</style>
