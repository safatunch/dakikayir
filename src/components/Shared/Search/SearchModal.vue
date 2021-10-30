<template>
<transition name="SearchModal">
    <div style="top:0; right:0; bottom:0; left:0; position: fixed; background-color: rgba(0, 0, 0, 0.8); z-index: 999; align-content: center;" v-show="Active">
            <a style="position: absolute; right: 10px; font-size: 4em; cursor: pointer" @click="$emit('CloseModal')" class="text-white"><span class="bi bi-x"></span></a>
        <div class="d-flex justify-content-center h-100">
        <div class="col-lg-6 d-flex justify-content-center flex-column">
            <div class="d-block d-sm-flex flex-row">
          <input type="text" v-model="SearchedText" name="" id="" class="form-control mx-2 mx-sm-0" placeholder="Ara" aria-describedby="helpId" style="font-size:2.5em; border-top-right-radius: 0; border-bottom-right-radius: 0">
          <button type="button" class="btn btn-warning mt-2 mt-sm-0" style="border-top-left-radius: 0; border-bottom-left-radius: 0">
              <h3 class="px-3"><span class="bi bi-search"></span></h3>
              </button>
          </div>
        </div>
        </div>
    </div>
    </transition>
</template>

<style scoped>
.SearchModal-enter{
    opacity: 0;
}

.SearchModal-enter-active{
    transition: opacity 0.6s;
}

.SearchModal-leave-active{
    transition: opacity 0.2s;
    opacity: 0;
}
</style>

<script>
export default {
  name: 'SearchModal',
  props: {
    Active: {
      default: false
    }
  },
  data () {
    return {
      SearchedText: ''
    }
  }
}
</script>
