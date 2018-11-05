<template>
    <div v-bind:key="product.id">{{ product.text }}</div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product']
}
</script>
