<template>
  <div class="">
    <div class="product">
      <product-item
        v-for="product in groceryList"
        v-bind:product="product"
        v-bind:key="product.id"
        @add-to-cart="onBuyButtonClick">
      </product-item>
    </div>

    <checkout-page>
      <span>aqqaa</span>
    </checkout-page>
  </div>
</template>

<script>
// import ProductItem from '@/components/product/ProductItem'
import ProductItem from '@/components/product/ProductItemWithBuy'
import CheckoutPage from '@/components/product/CheckoutPage'

export default {
  name: 'ProductPage',
  data () {
    return {
      groceryList: [
        {id: 0, text: 'Vegetables'},
        {id: 1, text: 'Cheese'},
        {id: 2, text: 'Mushroom'}
      ]
    }
  },
  methods: {
    onBuyButtonClick (data) {
      console.log('from tag product item=' + data)
    },
    onBuyButtonClick2 (data) {
      console.log('from tag checkout=' + data)
    }

  },
  components: {
    ProductItem, CheckoutPage
  }
}
</script>
<style>
.product {
  text-align: left;
  margin-top: 10px;
}
</style>
