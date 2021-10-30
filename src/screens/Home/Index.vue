<template>
    <div class="row">
      <app-slider></app-slider>
      <div style="height: 850px; position: absolute; left: 0px" class="pt-5">
        <div class="row" style="align-items: stretch; height:100%">
        <div class="col-lg-9 p-5 justify-content-end d-flex flex-column mb-lg-5 mb-0">
          <h2 style="color: white; padding: 4px; text-shadow: 1px 1px 4px black; white-space: wrap" class="mb-4">Anlık rezervasyonlarla istediğin yeri anında kap!</h2>
          <div>
          <button type="button" class="btn btn-warning mb-lg-5 mb-0">Bilgi Al</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-10 justify-content-center d-flex flex-column">
      <div class="card mt-0 mb-5 mx-4 mx-md-5 mx-lg-3" style="background-color: rgba(255, 255, 255, 0.8);">
        <div class="card-body">
          <h4 class="card-title">Hemen rezervasyon oluştur!</h4>
          <hr style="width:60px" />
          <div class="mb-3">
            <label for="" class="form-label">Şehir</label>
            <select class="form-control" name="" id="">
              <option>Adana</option>
              <option>Antalya</option>
              <option>Mersin</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Giriş Tarihi</label>
            <input type="date" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Çıkış Tarihi</label>
            <input type="date" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="col">
                  <label for="" class="form-label">Yetişkin</label>
                  <select class="form-control" name="" id="">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
              </div>
              <div class="col">
                  <label for="" class="form-label">Çocuk</label>
                  <select class="form-control" name="" id="">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-dark mt-4">Mekanları ara</button>
        </div>
      </div>
      </div></div>
      </div>
      <div class="row g-0">
          <div class="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
              <div class="container-fluid">
              <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#middleNav" aria-controls="middleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="middleNav">
                <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Spor</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Futbol</a>
                      <a class="dropdown-item" href="#">Basketbol</a>
                      <a class="dropdown-item" href="#">Voleybol</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Eğlence</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Action 1</a>
                      <a class="dropdown-item" href="#">Action 2</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tatil</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Action 1</a>
                      <a class="dropdown-item" href="#">Action 2</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Genel</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Action 1</a>
                      <a class="dropdown-item" href="#">Action 2</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div class="row g-0">
        <venue-list />
      </div>
    </div>
</template>

<style scoped>
.nav-item {
  margin:0 15px;
}
.nav-link {
  padding: 10px;
  z-index: 110;
}
.navbar .nav-item  .dropdown-menu
{
  border:1px solid black;
  z-index: 100;
  margin-top: -8px;
  padding: 10px;
}
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu { display: none;  }
  .navbar .nav-item:hover .dropdown-menu { display: block; }
}
</style>

<script>
import AppSlider from '../../components/Shared/Slider.vue'
import SearchBar from '../../components/Shared/Search/SearchBar.vue'
import SearchModal from '../../components/Shared/Search/SearchModal.vue'
import VenueList from '../../components/Venue/List.vue'

export default {
  name: 'Index',
  components: {
    AppSlider,
    VenueList,
    SearchBar,
    SearchModal
  }
}
</script>
