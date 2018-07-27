<template>
    <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
    import { oneOf, findComponentsDownward, findComponentsUpward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-menu';

    export default {
        name: 'Menu',
        mixins: [ Emitter ],
        props: {
            mode: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'vertical'
            },
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            activeName: {
                type: [String, Number]
            },
            openNames: {
                type: Array,
                default () {
                    return [];
                }
            },
            collapse:{
              type: Boolean,
              default: false
            },
            accordion: {
                type: Boolean,
                default: false
            },
            router: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '240px'
            }
        },
        data () {
            return {
                currentActiveName: this.activeName,
                openedNames: []
            };
        },
        computed: {
            classes () {
                let theme = this.theme;
                if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

                return [
                    `${prefixCls}`,
                    `${prefixCls}-${theme}`,
                    {
                      [`${prefixCls}-collapse`]:this.collapse
                    },
                    {
                        [`${prefixCls}-${this.mode}`]: this.mode
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.mode === 'vertical') style.width = this.width;

                return style;
            }
        },
        methods: {
            updateActiveName () {
                if (this.currentActiveName === undefined) {
                    this.currentActiveName = -1;
                }
                this.broadcast('Submenu', 'on-update-active-name', false);
                this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
            },
            updateOpenKeys (name) {
                let names = [...this.openedNames];
                const index = names.indexOf(name);
                if (this.accordion) findComponentsDownward(this, 'Submenu').forEach(item => {
                    item.opened = false;
                });
                if (index >= 0) {
                    let currentSubmenu = null;
                    findComponentsDownward(this, 'Submenu').forEach(item => {
                        if (item.name === name) {
                            currentSubmenu = item;
                            item.opened = false;
                        }
                    });
                    findComponentsUpward(currentSubmenu, 'Submenu').forEach(item => {
                        item.opened = true;
                    });
                    findComponentsDownward(currentSubmenu, 'Submenu').forEach(item => {
                        item.opened = false;
                    });
                } else {
                    if (this.accordion||this.collapse) {
                        let currentSubmenu = null;
                        findComponentsDownward(this, 'Submenu').forEach(item => {
                            if (item.name === name) {
                                currentSubmenu = item;
                                item.opened = true;
                            }
                        });
                        findComponentsUpward(currentSubmenu, 'Submenu').forEach(item => {
                            item.opened = true;
                        });
                    } else {
                        findComponentsDownward(this, 'Submenu').forEach(item => {
                            if (item.name === name) item.opened = true;
                        });
                    }
                }
                let openedNames = findComponentsDownward(this, 'Submenu').filter(item => item.opened).map(item => item.name);
                this.openedNames = [...openedNames];
                this.$emit('on-open-change', openedNames);
            },
            updateOpened () {
                const items = findComponentsDownward(this, 'Submenu');

                if (items.length) {
                    items.forEach(item => {
                        if (this.openedNames.indexOf(item.name) > -1) item.opened = true;
                        else item.opened = false;
                    });
                }
            }
        },
        mounted () {
            this.updateActiveName();
            this.openedNames = [...this.openNames];
            this.updateOpened();
            this.$on('on-menu-item-select', (name) => {
                this.currentActiveName = name;
                this.$emit('on-select', name);
                if(this.router&&this.$router){
                  this.$router.push({
                      path: name
                  })
                }
                if(this.collapse){
                  //console.log(this.openNames)
                  this.openNames.splice(0, this.openNames.length);
                  this.updateOpened();
                }
            });
            if(this.router&&this.$router){
              this.currentActiveName =this.$route.path
              this.$watch('$route',function(val,old){
                if(val.path!==old.path){
                  this.currentActiveName =val.path
                }
              })
            }
        },
        watch: {
            openNames (names) {
                this.openedNames = names;
            },
            activeName (val) {
                this.currentActiveName = val;
            },
            currentActiveName () {
                this.updateActiveName();
            }
        }
    };
</script>
