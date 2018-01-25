<template>
	<div class="gallery-layout">
		<div
			v-for="item in items"
			:key="item.id"
			class="gallery-layout-box"
			:style="{
				'width': `${item.width / item.height * calWidth}px`,
				'flex-grow': item.width / item.height,
			}">
      <i :style="{
        'padding-bottom': `${item.height / item.width * 100}%`
      }">
      </i>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GalleryLayoutList',

		props: {
			items: {
				type: Array,
				default: []
			},
			calWidth: {
				type: Number,
				default: 200
			}
		}
	};
</script>

<style lang="less">
	.gallery-layout {
		& {
			display: flex;
			flex-wrap: wrap;
		}

		.gallery-layout-box {

		}
	}
</style>

