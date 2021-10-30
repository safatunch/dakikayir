<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: rgba(0, 0, 0, 0.5) !important; position: absolute; z-index: 999; right:0; left:0">
      <router-link style="text-decoration: none" :to="{
        name: 'Index'
      }">
      <a class="navbar-brand px-4" href="#"
        ><span style="font-weight:bold; font-size:25px">D</span>akik<span style="font-weight:bold; font-variant:small-caps">a</span>yır</a
      >
      </router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="visually-hidden">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Action 1</a>
              <a class="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
        </ul>
        <div class="d-flex my-2 my-lg-0 mx-2">
        <search-bar />
          <button class="btn btn-warning my-2 my-sm-0" type="submit">
            Register
          </button>
          <button class="btn btn-warning my-2 my-sm-0 mx-2" type="submit">
            Login
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-item {
  margin:0 15px;
}
.nav-link {
  padding: 10px;
}
.navbar .nav-item  .dropdown-menu
{
  border:1px solid black;
  z-index: -1;
  margin-top: -8px;
  padding: 10px;
}
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu { display: none;  }
  .navbar .nav-item:hover .dropdown-menu { display: block; }
}
</style>

<script>
import SearchBar from '../../components/Shared/Search/SearchBar.vue'
export default {
  components: { SearchBar },
  name: 'app-header'
}
</script>
