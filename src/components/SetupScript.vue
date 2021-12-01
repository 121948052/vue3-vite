<!-- MyBook.vue -->
<template>
  <input type="number" v-model="readersNumber" />【{{ title }}】
</template>

<script setup>
  // script setup代表当前作用域就是setup函数内部空间
  // 在这里生命的变量会自动被return所以我们可以使用如下写法
  import { ref, computed } from 'vue'

  const readersNumber = ref(0)
  const title = computed(() => {
    return `Vue 3 Guide${readersNumber.value}`
  })
</script>