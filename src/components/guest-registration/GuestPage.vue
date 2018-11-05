<template>
  <div id="guest-app">
    <h3>Guest Registration</h3>
    <guest-registration>
    </guest-registration>

    <guest-registrations>
    </guest-registrations>
  </div>
</template>

<script>
    import Registration from '@/components/guest-registration/Registration'
    import Registrations from '@/components/guest-registration/Registrations'
    
    export default {
        data() {
            return {
            }
        },
        computed: {
        },
        methods: {
        },
        components: {
            guestRegistration: Registration,
            guestRegistrations: Registrations
        }
    }
</script>