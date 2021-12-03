<template>
  <button
    :class="[prefixCls, props.type && `${prefixCls}-${props.type}`]"
    :type="props.type"
    :disabled="props.disabled"
    @click="handleClickLink"
    v-bind="tagProps"
  >
    <slot />
  </button>
</template>
<script setup>
  import { computed } from 'vue'

  const prefixCls = 'z-btn'

  const props = defineProps({
    disabled: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
      },
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator (value) {
        return ['_blank', '_self', '_parent', '_top'].includes(value)
      },
      default: '_self'
    }
  })

  let emit = defineEmits(['z-click'])
  const handleClickLink = (event) => {
    if (props.disabled === false) {
      emit('z-click', event)
    }
  }

  const classes = computed(() => {
    return [
      `${prefixCls}`,
      `${prefixCls}-${this.type}`
    ]
  })

  const linkUrl = computed(() => {
    const type = typeof props.to
    return type === 'string' ? props.to : null
  })
</script>
<style lang="less" scoped>
  .z-btn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    color: #FFF;
    font-size: 13px;
    cursor: pointer;
    border: none;
  }
  .z-btn-primary {
    background-color: #1a76ff;
    &:hover{
      background-color: #599cff;
    }
  }
  .z-btn-success {
    background-color: #4dbb16;
  }
  .z-btn-warning {
    background-color: #d6840a;
  }
  .z-btn-danger {
    background-color: #f84a4a;
  }
  .z-btn-info {
    background-color: #909399;
  }
  .z-btn-text {
    color: rgb(17, 120, 255);
    border: none;
    background-color: transparent;
  }
  
</style>