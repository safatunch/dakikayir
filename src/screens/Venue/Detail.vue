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
        <venue-single v-for="_Venue in Venues" :key="_Venue.Id" :Venue="_Venue"></venue-single>
      </div>
      <div class="col-lg-7">
        <div class="m-4">
        <h5 v-if="Venue.VenueFeeGroup && Venue.VenueFeeGroup.VenueFees">Fiyat: {{Venue.VenueFeeGroup.VenueFees[0].Price | Price}}/Günlük</h5>
        <h5 v-else>Fiyat bilgisi yok</h5>
        <p v-if="rating">
        <star :Star="rating"></star>
        <span>(Google Görüşleri)</span>
        </p>
        <address v-if="Venue.Place" class="mb-1">Adres: {{ Venue.Place.formatted_address }}</address>
        <google-map></google-map>
        <div class="col-lg-12 d-flex flex-column mt-4" v-if="docs && docs.length > 0">
          <h4>Dosyalar</h4>
          <a v-for="(doc, index) in docs" target="_blank" :key="index" :href="doc.Url">{{doc.Name}}</a>
        </div>
        <review-list :Reviews="reviews"></review-list>
        </div>
      </div>
      <div class="col-lg-3">
        <company-single class="mt-4"></company-single>
        <div class="card mt-4">
          <div class="card-body">
                  <h4 class="card-title">
                  <span class="bi bi-calendar-date" style="margin:0 auto"></span> Rezervasyon Yap
                  </h4>
                  <hr />
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
import ReviewList from '../../components/Review/List.vue'
import GoogleMap from '../../components/Maps/GoogleMap.vue'
import AppSlider from '../../components/Shared/Slider.vue'
import VenueSingle from '../../components/Venue/Single.vue'
import CompanySingle from '../../components/Company/Single.vue'
import Star from '../../components/Venue/Star.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'VenueDetail',
  components: {
    AppSlider,
    VenueSingle,
    Star,
    ReviewList,
    GoogleMap,
    CompanySingle
  },
  beforeCreate () {
    this.$store.dispatch('GetVenue', this.$route.params.Id)
    setTimeout(() => {
      this.$store.dispatch('GetVenues', {page: 1, limit: 4})
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
        return this.Venue.UploadSet.Uploads.filter(x => x.DocType === 'image').map(x => x.Url)
      }
      return null
    },
    docs: function () {
      if (this.Venue && this.Venue.UploadSet && this.Venue.UploadSet.Uploads && this.Venue.UploadSet.Uploads.length > 0) {
        return this.Venue.UploadSet.Uploads.filter(x => x.DocType !== 'image')
      }
      return null
    },
    reviews: function () {
      if (this.Venue.Place && this.Venue.Place.reviews) {
        return this.Venue.Place.reviews.map((review) => {
          return {
            Text: review.text,
            Owner: review.author_name,
            OwnerPhoto: review.profile_photo_url,
            OwnerUrl: review.author_url,
            Rating: review.rating,
            Time: review.relative_time_description
          }
        })
      } else {
        return []
      }
    },
    rating: function () {
      if (this.Venue.Place) {
        return this.Venue.Place.rating
      }
      return null
    }
  },
  watch: {
    '$route.params.Id': function () {
      this.$store.dispatch('GetVenue', this.$route.params.Id)
      setTimeout(() => {
        this.$store.dispatch('GetVenues', {page: 1, limit: 4})
      }, 1000)
    }
  }
}
</script>
