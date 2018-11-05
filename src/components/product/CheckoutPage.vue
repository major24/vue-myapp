<template>
    <div id="checkout-container">
        <p>Checkout</p>
    </div>
</template>

<script>
import {eventBus} from '../../main'

/* eslint-disable */
export default {
    name: 'CheckoutPage',
    props: ['checkoutProduct'],
    methods: {
        addproduct: function () {
            console.log('here..')
        }
    },

    created () {
        console.log('created: ')
        //this.$on('add-to-cart', (data) => {
          //  console.log('33333')
        //})
        eventBus.$on('add-to-cart', (data) => {
            console.log('in chout- ' +data)
        })
    },
    mounted () {
        console.log('mounted: ' + this.$el.id)
        this.$el.addEventListener('add-to-cart', (data) => {
            console.log('aaaaa')
        })
    },



}
</script>
