<template>
<div class="row">
      <app-slider :Images="images" :Height="400"></app-slider>
      <div style="position: absolute; top:0; height:400px; left:0; right: 0; background-color: rgba(0, 0, 0, 0.25)">
        <div class="d-flex flex-column flex-1 justify-content-end h-100">
        <h1 class="text-center pb-5 mb-2 text-white" style="text-shadow: 1px 1px 5px black">{{Venue.Name}}</h1>
        </div>
      </div>
      <div class="col-lg-2">
        <h4 class="mt-4">Related Venues</h4>
        <hr style="width: 25px" />
        <venue-single v-for="_Venue in Venues.slice(0, 4)" :key="_Venue.Id" :Venue="_Venue"></venue-single>
      </div>
      <div class="col-lg-7">
        <div class="m-4">
        <h5 v-if="Venue.VenueFeeGroup && Venue.VenueFeeGroup.VenueFees">Fiyat: {{Venue.VenueFeeGroup.VenueFees[0].Price | Price}}/Günlük</h5>
        <h5 v-else>No price info</h5>
        <p>
        <star :Star="2.5"></star>
        <span>(Google Görüşleri)</span>
        </p>
        <address class="mb-1">Adres: Yazır Mahallesi Haseki Sokak Yazır Konakları 11/5</address>
        <google-map></google-map>
        <div class="col-lg-12 d-flex flex-column mt-4">
          <h4>Eklentiler</h4>
          <a href="#">Dosya.pdf</a>
          <a href="#">Dosya-2-Tanıtım.pdf</a>
        </div>
        <comment-list></comment-list>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card mt-4">
          <div class="card-body">
            <h4 class="card-title">Rezervasyon Yap!</h4>
            <div class="mb-3">
              <label for="" class="form-label">Tarih</label>
              <input type="date" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Giriş - Çıkış Saati</label>
              <div class="d-flex">
              <div class="col-lg-6">
              <select class="form-control" name="" id="">
                <option></option>
                <option></option>
                <option></option>
              </select>
              </div>
              <div class="col-lg-6">
              <select class="form-control" name="" id="">
                <option></option>
                <option></option>
                <option></option>
              </select>
              </div></div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import CommentList from '../../components/Comment/List.vue'
import GoogleMap from '../../components/Maps/GoogleMap.vue'
import AppSlider from '../../components/Shared/Slider.vue'
import VenueSingle from '../../components/Venue/Single.vue'
import Star from '../../components/Venue/Star.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'VenueDetail',
  components: {
    AppSlider,
    VenueSingle,
    Star,
    CommentList,
    GoogleMap
  },
  beforeCreate () {
    this.$store.dispatch('GetVenue', this.$route.params.Id)
    setTimeout(() => {
      this.$store.dispatch('GetVenues')
    }, 1000)
  },
  filters: {
    Price: function (value) {
      return value.toFixed(2) + ' TL'
    }
  },
  computed: {
    ...mapGetters(['Venue', 'Venues']),
    images: function () {
      if (this.Venue && this.Venue.UploadSet && this.Venue.UploadSet.Uploads && this.Venue.UploadSet.Uploads.length > 0) {
        return this.Venue.UploadSet.Uploads.map(x => x.Url)
      }
      return []
    }
  }
}
</script>
