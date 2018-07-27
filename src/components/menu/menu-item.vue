<template>
    <a v-if="to" :href="linkUrl" :target="target" :class="classes" @click="handleClickItem" :style="itemStyle"><slot></slot></a>
    <li v-else v-tooltip:tooltip :class="classes" @click.stop="handleClickItem" :style="itemStyle">
      <slot></slot>
      <Tooltip ref="tooltip" v-if="!!tooltip&&parent.collapse" :popper-class="popperClass" transfer :content="tooltip" placement="right"></Tooltip>
    </li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';
    import Tooltip from '../tooltip/';
    const prefixCls = 'ivu-menu';
    import mixin from './mixin';
    import mixinsLink from '../../mixins/link';

    export default {
        name: 'MenuItem',
        mixins: [ Emitter, mixin, mixinsLink ],
        components: {
          Tooltip
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            tooltip:{
                type: String,
                default: ''
            },
        },
        data () {
            return {
                active: false,
                parent: findComponentUpward(this, 'Menu')
            };
        },
        computed: {
            popperClass(){
              return `${prefixCls}-tooltip`
            },
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ];
            },
            itemStyle () {
                return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                    paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
                } : {};
            }
        },
        methods: {
            handleClickItem (event) {
                if (this.disabled) return;

                let parent = findComponentUpward(this, 'Submenu');

                if (parent) {
                    this.dispatch('Submenu', 'on-menu-item-select', this.name);
                } else {
                    this.dispatch('Menu', 'on-menu-item-select', this.name);
                }

                this.handleCheckClick(event);
            }
        },
        mounted () {
            this.$on('on-update-active-name', (name) => {
                if (this.name === name) {
                    this.active = true;
                    this.dispatch('Submenu', 'on-update-active-name', name);
                } else {
                    this.active = false;
                }
            });
        }
    };
</script>
