<template>
<div class="row justify-content-center my-4" v-if="Venues.length > 0">
    <venue-single v-for="Venue in Venues" :key="Venue.Id" :Venue="Venue" />
</div>
<div class="row text-center justify-content-center my-4" v-else>
  <h1><i class="bi bi-emoji-frown"></i></h1>
  <h2>NO VENUE FOUND </h2>
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
