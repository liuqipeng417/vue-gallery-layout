<template>
  <div class="gallery-layout">
    <div
      v-for="(item, index) in items"
      :key="index || item.id"
      class="gallery-layout-box-container"
      :class="boxContainerClass"
      :style="{
        'width': `${getActurlRatio(item) * boxInitRatio}px`,
        'flex-grow': getActurlRatio(item) * boxInitRatio
      }">
      <i
        class="gallery-layout-padding"
        :style="{
        'padding-bottom': `${1 / getActurlRatio(item) * 100}%`
      }"></i>
      <div
        class="gallery-layout-box">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueGalleryLayout',

    props: {
      items: {
        type: Array,
        default() {
          return [];
        }
      },
      boxInitRatio: {
        type: Number,
        default: 200
      },
      boxContainerClass: {
        type: String,
        default: ''
      }
    },

    methods: {
      getActurlRatio(item) {
        try {
          if (item.ratio) return item.ratio;

          return item.width / item.height;
        } catch (e) {
          throw new Error('Cant calculate box ratio(width / height) correctlly');
        }
      }
    }
  };
</script>

<style>
  .gallery-layout {
    display: flex;
    flex-wrap: wrap;
  }

  .gallery-layout-box-container {
    position: relative;
  }

  .gallery-layout-box {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
  }

  .gallery-layout-padding {
    display: block;
  }
</style>
