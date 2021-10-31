<template>
    <div class="d-flex p-0 justify-content-center min-vh-100">
        <div class="col-lg-4 m-auto">
        <div class="card p-3">
            <div class="card-header border-0 d-flex justify-content-between" style="font-size: 1.1em; font-weight: bold; align-items: start">
                <span>
                DakikAyır Giriş
                <hr style="width: 25px" />
                </span>
                <router-link to="/" tag="span" class="bi bi-x bg-dark text-white px-1" style="border-radius: 100%; cursor: pointer">
                </router-link>
            </div>
            <div class="card-body">
                <div class="mb-3">
                  <label for="" class="form-label">Kullanıcı Adınız</label>
                  <input type="text" name="" id="" class="form-control" v-model="User.username" placeholder="Kullanıcı adı" aria-describedby="Kullanıcı Adı">
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Şifreniz</label>
                  <input type="password" name="" id="" class="form-control" v-model="User.password" placeholder="*******" aria-describedby="Şifre">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input bg-dark" name="" id="" value="checkedValue">
                      <label class="form-check-label" for="">
                        Beni hatırla
                      </label>
                    </div>
                </div>
                <div class="mb-3">
                <button type="button" class="btn btn-warning" @click="Login(User)">Giriş Yap</button>
                <button type="button" class="btn btn-danger">Kayıt Ol</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data: function () {
    return {
      User: {
        username: '',
        password: ''
      }
    }
  },
  methods: mapActions(['Login'])
}
</script>
