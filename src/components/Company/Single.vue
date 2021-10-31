<template>
        <div class="card">
          <div class="card-body">
              <div class="card-title">
                <div class="d-flex justify-content-between">
                  <h4 class="p-2 mt-auto">
                  Tunch Language Schools
                  </h4>
                  <img style="height:60px;margin:auto 0" src="https://nswschoollang.schools.nsw.gov.au/content/dam/doe/sws/schools/n/nswschoollang/NSWSchoolLanguages_Logo_stacked.png" />
                </div>
              </div>
              <hr />
              <div>
                <ul style="list-style-type:none;" class="px-3">
                  <li><span class="bi bi-person"></span> {{Company.Staff}}</li>
                  <li><a class="link-unstyled" :href="'tel:' + Company.Phone"><span class="bi bi-telephone"></span> {{Company.Phone}}</a></li>
                  <li><a class="link-unstyled" :href="'mailto:' + Company.Email"><span class="bi bi-envelope"></span> {{Company.Email}}</a></li>
                  <li><a class="link-unstyled" target="_blank" :href="'https://www.google.com/maps/search/' + Company.Address"><span class="bi bi-geo-alt"></span> {{ Company.Address }} </a></li>
                  <li><a style="text-decoration:none;" :href="Company.Website"><span class="bi bi-link"></span> {{Company.Website}}</a></li>
                </ul>
              </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'CompanySingle',
  props: {
    Company: {
      required: true,
      type: Object,
      default: function () {
        return {
          Staff: 'Hande Tunç',
          Phone: '0541 203 1440',
          Email: 'handetunch@gmail.com',
          Address: 'Haseki Sokak, Yazır Konakları 11/5, Selçuklu/Konya',
          Website: 'handetunch.com'
        }
      }
    }
  }
}
</script>

<style scoped>
li {
    margin-top:5px
}
.link-unstyled {
    text-decoration: none;
    color: unset !important
}
</style>
