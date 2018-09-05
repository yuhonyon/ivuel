---
title:
  zh-CN: 说明
  en-US: Button Size
desc:
  zh-CN: Transfer 组件主要基于以下四个 API 来使用：
  en-US: Button

order: 1
---

# zh-CN

*  :data：总体数据，数组，每项为一个对象，且必须含有 key 值，组件基于此做索引。
*  :target-keys：目标列索引集合，数组，每项为数据的 key 值，Transfer 会将含有这些 key 值的数据筛选到右边。
*  :render-format：每行数据显示的格式函数，默认优先显示 label 值，没有时显示 key 值，可以自己组合出需要的数据格式。
*  @on-change：当点击转移按钮时，组件本身并不会转移数据，而是触发事件，由用户来操作数据。

示例：

```js
export default {
    data () {
        return {
            data: [
                { "key": "1", "label": "Content 1", "disabled": false },
                { "key": "2", "label": "Content 2", "disabled": true },
                { "key": "3", "label": "Content 3", "disabled": false }
            ],
            targetKeys: ["1","2"]
        }
    },
    methods: {
        render (item) {
            return item.key + ':' + item.label;
        },
        onChange (newTargetKeys) {
            this.targetKeys = newTargetKeys;
        }
    }
}
```

# en-US
