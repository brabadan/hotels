<template>
    <div>
        Работаем с отелем: {{ $store.state.currentHotel.name }}
        <ViewLinkImages v-if="$store.state.currentHotel"
                        v-bind:images="$store.state.currentHotel.images"
        >
        </ViewLinkImages>
        <table>
            <thead>
            <tr>
                <td>комнаты:</td>
                <td>предметы:</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <ul>
                        <li v-for="room in $store.state.currentHotel.fullInfo.rooms"
                            v-bind:key="room._id"
                            v-on:click="roomId = room._id"
                            v-bind:class="roomId === roo._id ? 'room-selected' : ''"
                        >
                            {{ room.room_number }}
                            <ViewLinkImages v-bind:images="room.images">
                            </ViewLinkImages>
                        </li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li v-for="item in $store.state.currentHotel.fullInfo.items"
                            v-bind:key="item._id"
                            v-if="item.room_id === roomId"
                        >
                            {{ item.name }}
                            <ViewLinkImages v-bind:images="item.images">
                            </ViewLinkImages>
                        </li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import ViewLinkImages from './VueLinkImages'

export default {
  name: 'Work',
  created () {
    // Если не выбран отель, перенаправляем на выбор отеля
    if (!this.$store.state.currentHotel.name) {
      this.$store.dispatch('showStatusBar', 'Выберите отель для продолжения работы...')
      this.$router.replace('/config')
    }
  },
  data () {
    return {
      roomId: '' // id выбранной комнаты. Для фильтрации и показа только предметов этой комнаты
    }
  },
  components: {
    ViewLinkImages
  }
}
</script>

<style scoped lang="stylus">
    .room-selected
        background-color aquamarine
</style>
