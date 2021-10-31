<template>
    <div class="d-flex p-0 justify-content-center min-vh-100">
        <div class="col-lg-4 m-auto">
        <div class="card p-3">
            <div class="card-header border-0 d-flex justify-content-between" style="font-size: 1.1em; font-weight: bold; align-items: start">
                <span>
                DakikAyır Kayıt Ol
                <hr style="width: 25px" />
                </span>
                <router-link to="/" tag="span" class="bi bi-x bg-dark text-white px-1" style="border-radius: 100%; cursor: pointer">
                </router-link>
            </div>
            <div class="card-body">
                <div class="mb-3">
                  <label for="" class="form-label">Kullanıcı Adınız</label>
                  <input type="text" name="" id="" class="form-control" placeholder="Kullanıcı adı" aria-describedby="Kullanıcı Adı">
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Şifreniz</label>
                  <input type="password" name="" id="" class="form-control" placeholder="*******" aria-describedby="Şifre">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input bg-dark" name="" id="" value="checkedValue">
                      <label class="form-check-label" for="">
                        Beni hatırla
                      </label>
                    </div>
                </div>
                <button type="button" class="btn btn-warning">Giriş Yap</button>
                <button type="button" class="btn btn-danger">Kayıt Ol</button>
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-body quick-login">
            <div class="justify-content-center d-flex">
            <a href="#" class="btn btn-danger flex-grow-1">
                <div class="d-flex flex-row justify-content-around">
                <span class="bi bi-google" style="font-size:1.8em"></span> Google ile <br /> giriş yap
                </div>
            </a>
            <a href="#" class="btn btn-dark flex-grow-1">
                <div class="d-flex flex-row justify-content-around">
                <span class="bi bi-envelope" style="font-size:1.8em"></span> Microsoft ile <br /> giriş yap
                </div>
                </a>
            <a href="#" class="btn btn-primary flex-grow-1">
                <div class="d-flex flex-row justify-content-around">
                <span class="bi bi-facebook" style="font-size:1.8em"></span> Facebook ile <br /> giriş yap
                </div>
                </a>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'Empty'
}
</script>

<style scoped>
  .quick-login a {
      margin:0px 5px;
  }
</style>
