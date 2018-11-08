<template>
    <div class="container-config">
        Выберете отель:
        <select v-model="$store.state.currentHotel"
                v-on:change="$store.dispatch('onCurrentHotelChanged')"
        >
            <option v-for="hotel in $store.state.hotelList"
                    v-bind:value="hotel"
                    v-bind:key="hotel._id"
            >
                {{ hotel.name }}
            </option>
        </select>
        <ViewLinkImages v-if="$store.state.currentHotel"
                        v-bind:images="$store.state.currentHotel.images"
        >
        </ViewLinkImages>
    </div>
</template>

<script>
import store from '../store'
import ViewLinkImages from './VueLinkImages'

export default {
  name: 'Config',
  beforeRouteEnter (to, from, next) {
    if (store.state.hotelList.length === 0) {
      store.dispatch('getHotelList')
        .then(next)
    } else {
      next()
    }
  },
  components: {
    ViewLinkImages
  }
}

</script>

<style scoped lang="stylus">
    div.container-config
        border 1px solid blue
        border-radius 5px
        display inline-block
        width 30%
        height 50%
        position absolute
</style>
