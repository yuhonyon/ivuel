<template>
    <div :class="[prefixCls]" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-rel']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div
                :class="[prefixCls + '-popper',tooltipClassName]"
                ref="popper"
                v-show="!disabled && (visible || always)"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                :data-transfer="transfer"
                v-transfer-dom>
                <div :class="[prefixCls + '-content']">
                    <div :class="[prefixCls + '-arrow']"></div>
                    <div :class="[prefixCls + '-inner']"><slot name="content">{{ content }}</slot></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Popper from '../base/popper';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-tooltip';

    export default {
        name: 'Tooltip',
        directives: { TransferDom },
        mixins: [Popper],
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'focus', 'hover']);
                },
                default: 'hover'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            content: {
                type: [String, Number],
                default: ''
            },
            tooltipClassName:{
              type: String,
              default: ""
            },
            delay: {
                type: Number,
                default: 100
            },
            disabled: {
                type: Boolean,
                default: false
            },
            controlled: {    // under this prop,Tooltip will not close when mouseleave
                type: Boolean,
                default: false
            },
            always: {
                type: Boolean,
                default: false
            },
            transfer: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        watch: {
            content () {
                this.updatePopper();
            }
        },
        methods: {
            handleShowPopper() {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, this.delay);
            },
            handleClosePopper() {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    if (!this.controlled) {
                        this.timeout = setTimeout(() => {
                            this.visible = false;
                        }, 100);
                    }
                }
            },
            handleClick () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible?this.handleClosePopper():this.handleShowPopper()
            },
            handleFocus () {
                if (this.trigger !== 'focus') {
                    return false;
                }
                this.handleShowPopper()
            },
            handleBlur () {
                if (this.trigger !== 'focus') {
                    return false;
                }
                this.handleClosePopper()
            },
            handleMouseenter () {
                if (this.trigger !== 'hover') {
                    return false;
                }
                this.handleShowPopper()
            },
            handleMouseleave () {
                if (this.trigger !== 'hover') {
                    return false;
                }
                this.handleClosePopper()
            }
        },
        mounted () {
            let reference = this.$refs.reference;
            reference.addEventListener('mouseenter', this.handleMouseenter, false);
            reference.addEventListener('mouseleave', this.handleMouseleave, false);
            reference.addEventListener('mousedown', this.handleFocus, false);
            reference.addEventListener('mouseup', this.handleBlur, false);
            reference.addEventListener('click', this.handleClick, false);

            if (this.always) {
                this.updatePopper();
            }
        },
        beforeDestroy () {
            let reference = this.$refs.reference;

            reference.removeEventListener('mousedown', this.handleFocus, false);
            reference.removeEventListener('mouseup', this.handleBlur, false);
            reference.removeEventListener('click', this.handleClick, false);
            reference.removeEventListener('mouseenter', this.handleMouseenter, false);
            reference.removeEventListener('mouseleave', this.handleMouseleave, false);

        }
    };
</script>
