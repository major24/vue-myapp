<template>
  <div class="products">
    <div v-for="product in products" :key="product.id">
        <product :product="product"></product>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product/Product'

export default {
  name: 'Products',
  methods: {
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  components: {
    Product
  }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
