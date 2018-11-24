<template>
  <div class="product-item">
    <div>
        <div class="prod-title">{{product.text}}</div>
        <buy-item :product="product"></buy-item>
    </div>
  </div>
</template>

<script>
import BuyItem from "./BuyItem";

export default {
  name: "Product",

  components: {
    BuyItem
  },

  props: ["product"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prod-title {
    font-size: 18px;
    color: green;
    padding-left: 10px;
    width: 140px;
    border: 1px solid;
}

</style>
