<template>
  <div class="customer">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data () {
    return {
      msg: 'Customer component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.customer h3 {
  color: green;
  text-align: center;
}
</style>
