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
            <img v-bind:src="'images/' + imageId"
                 v-on:click="$store.dispatch('viewImage', 'images/' + imageId)"
            >
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

    img:hover
        cursor move

    .image-close
        position absolute
        top 2px
        right 2px
        width 1em
        height 1em
        background bisque
        opacity 0.4

    .image-close:hover
        opacity 1
        cursor pointer

</style>
