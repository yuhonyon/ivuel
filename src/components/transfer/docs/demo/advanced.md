---
title:
  zh-CN: 高级用法
  en-US: Button Size
desc:
  zh-CN: 穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。
  en-US: Button

order: 7
---

# zh-CN


# en-US

```vue
<template>
    <Transfer
        :data="data3"
        :target-keys="targetKeys3"
        :list-style="listStyle"
        :render-format="render3"
        :operations="['To left','To right']"
        filterable
        @on-change="handleChange3">
        <div :style="{float: 'right', margin: '5px'}">
            <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>
        </div>
    </Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                }
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
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            }
        }
    }
</script>
```
