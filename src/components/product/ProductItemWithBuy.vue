<template>
    <div v-bind:key="product.id">
        <span>{{ product.text }}</span>
        <span>
            <button v-on:click="buy" v-bind:data-pid="product.id">Buy{{ product.id }}</button>
        </span>
    </div>
</template>

<script>
/* eslint-disable */
import {eventBus} from '../../main'

export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    buy: function (event) {
        const prodId = event.target.getAttribute('data-pid')
        console.log(prodId)
        // this.$emit('add-to-cart', prodId)
        eventBus.$emit('add-to-cart', prodId)
    }
  }
}
</script>
