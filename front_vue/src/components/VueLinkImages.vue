<template>
    <!-- Если массив картинок -->
    <div class="link-image-array">
        <img v-for="(src, index) of getLinkImage()"
             v-bind:key="index"
             v-bind:src="'images/' + src"
             v-on:click="$store.dispatch('viewImage', 'images/' + src)"
        >
    </div>
</template>

<script>
export default {
  name: 'VueLinkImages',
  props: [
    'images'
  ],
  methods: {
    // Значение link-image
    getLinkImage: function () {
      // Если поле-указатель, то возвращаем соответствующее значение
      // if (column.link && column.linkList && column.linkList[id]) {
      try {
        // let images = this.column.linkList[this.linkId].image
        let images = this.images
        if (images instanceof Array) return images
        if (images) return [images]
        return []
      } catch (e) {
        this.$store.dispatch('showStatusText', e)
      }
      // }
      // return 'not found :('
    }
  }
}
</script>

<style scoped lang="stylus">
    img
        width: 5em
        height: 5em
        margin: 2px

    img:hover
        cursor move
</style>
