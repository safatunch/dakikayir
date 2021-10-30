<template>
<div class="row justify-content-center my-4">
    <venue-single v-for="Venue in Venues" :key="Venue.Id" :Venue="Venue" />
</div>
</template>

<script>
import VenueSingle from './Single.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'VenueList',
  components: { VenueSingle },
  computed: mapGetters(['Venues']),
  beforeCreate () {
    this.$store.dispatch('GetVenues')
  }
}
</script>
