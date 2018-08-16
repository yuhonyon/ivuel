<template>
  <transition name="ivu-zoom-in-top" @after-leave="doDestroy">
    <div
      class="ivu-color-dropdown"
      v-show="showPopper">
      <div class="ivu-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="ivu-color-dropdown__btns">
        <span class="ivu-color-dropdown__value">
          <i-input
            v-model="customInput"
            @on-keyup.native.enter="handleConfirm"
            @on-blur="handleConfirm"
            size="small">
          </i-input>
        </span>
        <i-button
          size="small"
          type="text"
          class="ivu-color-dropdown__link-btn"
          @click="$emit('clear')">
          {{ t('i.colorpicker.clear') }}
        </i-button>
        <i-button
          plain
          size="small"
          class="ivu-color-dropdown__btn"
          @click="confirmValue">
          {{ t('i.colorpicker.confirm') }}
        </i-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Predefine from './predefine';
  import Popper from '../../../../utils/vue-popper';
  import Locale from '../../../../mixins/locale';
  import IInput from '../../../input';
  import IButton from '../../../button';

  export default {
    name: 'ivu-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      IInput,
      IButton,
      Predefine
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean,
      predefine: Array
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      handleConfirm() {
        this.color.fromString(this.customInput);
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor(val) {
        this.customInput = val;
      }
    }
  };
</script>
