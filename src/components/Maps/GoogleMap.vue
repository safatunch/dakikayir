<template>
  <div class="col-lg-12">
  <div id="map" style="height: 200px; width: 100%"></div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: ''
})

const mapOptions = {
  center: {
    lat: 40,
    lng: 35
  },
  zoom: 4
}

loader.load().then((google) => {
  // eslint-disable-next-line no-new
  new google.maps.Map(document.getElementById('map'), mapOptions)
})

export default {
  name: 'GoogleMap'
}
</script>
