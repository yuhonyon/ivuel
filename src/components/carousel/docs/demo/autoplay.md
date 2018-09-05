---
title:
  zh-CN: 自动转换
  en-US: icon&shapes
desc:
  zh-CN: 设置属性 autoplay 可以自动轮播，同时可以设置属性 autoplay-speed 改变自动播放的速度。
  en-US: Button

order: 11
---

# zh-CN


# en-US



```vue
<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

```
