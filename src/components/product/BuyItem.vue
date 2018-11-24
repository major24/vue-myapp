<template>
  <span class="buy-item">
    <button type="button" @click="buyItem()">Buy</button>
  </span>
</template>

<script>
export default {
  name: "BuyItem",
  props: {
    product: {
      id: Number
    }
  },
  computed: {
  },
  
  methods: {
    buyItem() {
      console.log(this.product)
      let idx = this.$store.state.checkedoutProducts.length + 1
      let bought = {
        chkid: idx,
        id: this.product.id,
        text: this.product.text
      }
      this.$store.state.checkedoutProducts.push(bought)
      this.$emit('buy-item', this.product)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>