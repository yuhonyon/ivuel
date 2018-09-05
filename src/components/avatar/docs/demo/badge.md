---
title:
  zh-CN: 自动调整字符大小
  en-US: Button Size
desc:
  zh-CN: 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
  en-US: Button

order: 22
---

# zh-CN


# en-US



```vue
<template>
    <div class="demo-avatar">
        <Avatar :style="{background: color}">{{ user }}</Avatar>
        <Button size="small" @click="handleChange">Change</Button>
    </div>
</template>
<script>
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    export default {
        data () {
            return {
                user: UserList[0],
                color: ColorList[0]
            }
        },
        methods: {
            handleChange () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            }
        }
    }
</script>

```
