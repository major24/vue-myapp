<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/customer">Customer</router-link> |
    <router-link to="/parent-child">Parent/Child</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/button-counter">Button Counter</router-link> |
    <router-link to="/guest-registration">Guest Registration</router-link> |
    
  </div>
</template>

<script>
export default {
  name: 'NavPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    text-align: left;
    padding-left: 30px;
    font-size: 12px;
}
</style>
