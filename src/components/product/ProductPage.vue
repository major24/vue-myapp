<template>
  <div class="">
    <products>
    </products>
    <hr />
    <br />
    <checkout-container></checkout-container>
    <hr />
    <AdditionalProductsContainer></AdditionalProductsContainer>
  </div>
</template>

<script>
import Products from '@/components/product/Products'
import CheckoutContainer from '@/components/product/CheckoutContainer'
import AdditionalProductsContainer from '@/components/product/AdditionalProductsContainer'

export default {
  name: 'ProductPage',
  methods: {
  },
  components: {
    Products, CheckoutContainer, AdditionalProductsContainer
  }
}
</script>
<style>
.product {
  text-align: left;
  margin-top: 10px;
}
</style>
