<template>
    <div class="image-back-screen"
         v-if="imageSrc"
    >
        <div class="image-black-screen"
             v-on:click="closeImage"
        ></div>
        <img v-bind:src="imageSrc"
             v-on:click="closeImage"
        >
    </div>
</template>

<script>
export default {
  name: 'ViewImage',
  props: ['imageSrc'],
  methods: {
    closeImage () {
      this.$store.dispatch('viewImage', '')
    }
  }
}
</script>

<style scoped lang="stylus">
    .image-back-screen, .image-black-screen
        top 0px
        left 0px
        width 100%
        height 100%
        position absolute
        z-index 200
    div.image-black-screen
        background-color black
        opacity 0.5
    img
        position absolute
        top 30%
        left 35%
        width 30%
        max-height 70%
        z-index 201
</style>
