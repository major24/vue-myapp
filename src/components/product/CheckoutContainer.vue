<template>
  <div class="cheout-container">
    <p>Checkedout Items</p>
    <ul>
        <li v-for="checkedoutProduct in checkedoutProducts" :key="checkedoutProduct.chkid">
            {{checkedoutProduct}}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CheckoutContainer',
  methods: {
  },
  computed: {
    checkedoutProducts() {
      return this.$store.state.checkedoutProducts
    }
  },
  components: {
    
  }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
