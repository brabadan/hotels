<template>
    <div class="app-main">
        <AppMainHeader :headerText="message"
                        class="app-main-header"
        >
        </AppMainHeader>
        <AppMainSide :links="links"
                    class="app-main-side"
        >
        </AppMainSide>
        <label>
            Введите новый отель:
            <input type="text"
                   placeholder="название отеля"
                   @keyup.enter="onEnterHotel"
            />
        </label>
        <table>
            <caption>Список отелей</caption>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                </tr>
            </thead>
            <tr v-for="(hotel, index) in hotelsList"
                :key="index"
            >
                <td>{{ index + 1 }}</td>
                <td>{{ hotel }}</td>
            </tr>
        </table>
        <ul v-if="tableList">
            <li v-for="(column, index) in Object.keys(tableList.users.columns)"
                v-bind:key="index"
            >
                {{ column }}
            </li>
        </ul>
        <b v-else>Нет объекта :(</b>
        {{ tableList }}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppMainHeader from '@/components/AppMainHeader.vue'
import AppMainSide from '@/components/AppMainSide.vue'

export default {
  name: 'HotelsMain',
  data () {
    return {
      message: 'Это супер-пупер прога про отели'
    }
  },
  computed: {
    ...mapState([
      'hotelsList',
      'links'
    ]),
    ...mapGetters([
      'tableList'
    ])
  },
  methods: {
    onEnterHotel (e) {
      this.$store.dispatch('addHotel', e.target.value)
    }
  },
  components: {
    AppMainHeader,
    AppMainSide
  }
}

</script>

<style scoped lang="stylus">
.app-main-header
    width 100%
    height 8%
    background-color darkgrey
.app-main-side
    width 20%
    display block
    float left
    border aqua 1px solid
table
    margin-left auto
    margin-right auto
    border-collapse collapse
    td, th
        border 1px solid
</style>
