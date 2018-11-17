<template>
    <!-- Если массив картинок -->
    <div class="link-image-array">
        <div v-for="(imageId, index) of getLinkImage()"
             v-bind:key="index"
             class="image"
        >
            <div v-if="closeImage"
                 class="image-close"
                 v-on:click="closeImage(imageId)"
            >X
            </div>
            <div class="image-zoom"
                 v-on:click="$store.dispatch('viewImage', 'images/' + imageId)"
            >+
            </div>
            <img v-bind:src="'images/' + imageId">
        </div>
    </div>
</template>

<script>
export default {
  name: 'VueLinkImages',
  props: [
    'images',
    'closeImage'
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
        this.$store.dispatch('showStatusBar', e)
      }
      // }
      // return 'not found :('
    }
  }
}
</script>

<style scoped lang="stylus">

    div.image
        display inline-block;
        position relative;

    img
        width: 5em
        height: 5em
        margin: 2px

    .image-close, .image-zoom
        position absolute
        top 2px
        right 2px
        width 1em
        height 1em
        background bisque
        opacity 0.4

    .image-zoom
        left: 2px

    .image-close:hover, .image-zoom:hover
        opacity 1
        cursor pointer

</style>
