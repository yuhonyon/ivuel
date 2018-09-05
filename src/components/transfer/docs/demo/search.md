---
title:
  zh-CN: 搜索
  en-US: Button Size
desc:
  zh-CN: 通过设置属性 filterable 可以进行搜索，可以自定义搜索函数。
  en-US: Button

order: 3
---

# zh-CN


# en-US



```vue
<template>
    <Transfer
        :data="data2"
        :target-keys="targetKeys2"
        filterable
        :filter-method="filterMethod"
        @on-change="handleChange2"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            }
        }
    }
</script>
```
