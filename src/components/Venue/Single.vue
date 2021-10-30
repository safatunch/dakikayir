<template>
  <router-link class="col-lg-4 col-xl-3 col-md-6" style="text-decoration: none; color: black" :to="{
    name: 'VenueDetail',
    params: { Id: Venue.Id }
  }">
    <div class="card m-4">
        <img class="card-img-top" :src="image" alt="">
        <div class="card-body">
            <h4 class="card-title">{{Venue.Name}}</h4>
            <p class="card-text">
                <span class="badge bg-warning text-dark">Park</span>
                <span class="badge bg-warning text-dark">Park</span>
                <span class="badge bg-warning text-dark">Park</span>
                <br />
                <button v-if="Venue.VenueFeeGroup && Venue.VenueFeeGroup.VenueFees" href="#" class="badge bg-dark mt-2" style="font-size:0.9em">{{Venue.VenueFeeGroup.VenueFees[0].Price | Price}}</button></p>
        </div>
    </div>
  </router-link>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover !important;
}
</style>

<script>
export default {
  name: 'VenueSingle',
  props: {
    Venue: {}
  },
  filters: {
    Price: function (value) {
      return value.toFixed(2) + ' TL'
    }
  },
  computed: {
    image: function () {
      if (this.Venue.UploadSet && this.Venue.UploadSet.Uploads && this.Venue.UploadSet.Uploads.length > 0) {
        return this.Venue.UploadSet.Uploads[0].Url
      }
      return require('../../assets/img/Venue/default.jpg')
    }
  }
}
</script>
