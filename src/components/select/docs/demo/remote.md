---
title:
  zh-CN: 远程搜索
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 81
---

# zh-CN
远程搜索需同时设置 filterable、remote、remote-method、loading 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。

注意：需要给 Option 设置 key。

设置初始显示值，需设置 label 属性。

本例为美国州名，尝试输入一些字母。

# en-US



```vue
<template>
    <Row>
        <Col span="12" style="padding-right:10px">
            <Select
                v-model="model13"
                filterable
                remote
                :remote-method="remoteMethod1"
                :loading="loading1">
                <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
            </Select>
        </Col>
        <Col span="12">
        <Select
            v-model="model14"
            multiple
            filterable
            remote
            :remote-method="remoteMethod2"
            :loading="loading2">
            <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                model13: '',
                loading1: false,
                options1: [],
                model14: [],
                loading2: false,
                options2: [],
                list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
            }
        },
        methods: {
            remoteMethod1 (query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options1 = [];
                }
            },
            remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
        }
    }
</script>

```