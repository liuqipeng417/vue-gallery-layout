<template>
	<div class="gallery-layout">
    <div
      v-for="(item, index) in items"
      :key="index || item.id"
      :class="boxContainerClass"
      :style="{
        'width': `${getActurlRatio(item) * boxInitRatio}px`,
        'flex-grow': getActurlRatio(item)
      }">
      <i :style="{
        'padding-bottom': `${1 / getActurlRatio(item) * 100}%`,
        'display': 'block'
      }"></i>
      <slot name="item" :item="item"></slot>
    </div>
	</div>
</template>

<script>
	export default {
    name: 'GalleryLayout',

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
</style>
