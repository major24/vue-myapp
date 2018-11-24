<template>
  <div class="additional-products">
    <p class='addn-title'>Additional Products...</p>
    <span>
        People who bought
        <span class='addn-bought'>{{bought}}</span>
        also liked to buy below products.
    </span>
    <p>{{additionalProducts}}</p>
  </div>
</template>

<script>

export default {
  name: 'AdditionalProductsContainer',
  data() {
      return {
          bought: ''
      }
  },
  methods: {

  },
  computed: {

    additionalProducts() {
        let itemCheckedout = ''
        let moreProds = []
        if (this.$store.state.checkedoutProducts.length > 0) {
            itemCheckedout = this.$store.state.checkedoutProducts[this.$store.state.checkedoutProducts.length-1]
        }
        this.bought = itemCheckedout.text

        // search in db to get fav / additional products
        // hardcode for now
        if (itemCheckedout.id === 0) {
            // tomato
            moreProds.push('Cucumber')
            moreProds.push('Salad')
        } else if (itemCheckedout.id === 1){
            // cheese
            moreProds.push('Swiss Cheese')
            moreProds.push('Australian Cow Cheese')
        }
        return moreProds
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
.addn-title {
    color: brown;
    font-weight :bold;
}
.addn-bought {
    color:blueviolet;
}
</style>
