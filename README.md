# vue-gallery-layout

这是一个使用（近乎）纯 CSS 实现类似 Google Photo 图片列表的自适应布局组件；这里 `近乎` 实际上是指需要提前获知图片的比例或者宽高。具体原理请参照[此处](https://github.com/xieranmaya/blog/issues/4)

## 例子

[例子](http://jsbin.com/fequmek/7/edit?html,css,js,output)

![例子](https://kss.ksyun.com/wpsconfig/gallery-demo-2-iloveimg-compressed.gif)

## 特点

- 每个 box 等比拉伸
- box 在水平方向将占满每行，无多余空白
- 每行的高度保持相同，底部对齐

PS: 自适应指：高宽均不可控

## 安装

`npm install vue-gallery-layout -s`

## 用法

局部引入
```
import VueGalleryLayout from 'vue-gallery-layout';

// demo.vue
...
export default {
  components: {
    VueGalleryLayout
  }
}
```

全局引入
```
import VueGalleryLayout from 'vue-gallery-layout';
import Vue from 'vue';

Vue.use(VueGalleryLayout);
```

Broswer 引入
```
// 全局暴露变量 GalleryLayout
<script src="http://img1.pcfg.cache.wpscdn.cn/ks3_e54f8ef1b8d7109e20123211fcba9376/vue-gallery-layout.min.js"></script>
<script>
  new Vue({
    el: '#app',
    components: {
      GalleryLayout
    }
  })
</script>
```

具体使用
```
<template>
  <div>
    <gallery-layout :items="items">
      <template slot-scope="scope">
        <div>{{scope.item.width}}</div>
        <!-- <img :src="scope.item.src"/> -->
      </template>
    </gallery-layout>
  </div>
</template>

<script>
export default {
  //...

  data() {
    return {
      items: [
        {
          {
            width: 200,
            height: 100
            // ratio: 2
          },
          {
            width: 300,
            height: 200
            // ratio: 1.5
          }
        }
      ]
    }
  }
}
</script>
```

### props

- items: Array<[item...]>
    - item: Object<{width, height, ratio, id}>
        - id: Any 标识符
        - width: Number 宽，必需
        - height: Number 高，必需
        - ratio: Number, width / height，有 ratio 则不需要 width 以及 height
- boxContainerClass: String，默认为''； box 容器 class
- boxInitRatio: Number，默认 200；假设大部分 box 的比例 2: 1，初始屏幕宽度为 1600px，你希望可以大部分情况下可以容纳 4 个 box，那么你的 boxInitRatio 小于 200。注意：由于自适应的存在，每行容纳 box 实际上是由 boxInitRatio, item 的 ratio，每行宽度决定的。

## 扩展（高层）组件

- [vue-gallery-images](https://github.com/liuqipeng417/vue-gallery-pictures)：画廊组件

## LICENSE

MIT
