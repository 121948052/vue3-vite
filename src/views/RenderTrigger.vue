<template>
  <div class="about-content">
    <z-button
      type="primary"
      @z-click="addToCart"
    >
      添加
    </z-button>Cart({{ cart }})
  </div>
</template>

<script>
import ZButton from '@/components/ZButton.vue'
export default {
  name: 'RenderTrigger',
  components: { ZButton },
  data() {
    return {
      cart: 0
    }
  },
  renderTracked({ key, target, type }) {
    console.log({ key, target, type })
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type })
  },
  methods: {
    addToCart() {
      this.cart += 1
      /* 这将导致 renderTriggered 被调用
        {
          key: "cart",
          target: {
            cart: 1
          },
          type: "set"
        }
      */
    }
  }
};
</script>
