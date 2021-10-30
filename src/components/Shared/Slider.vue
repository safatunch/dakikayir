<template>
    <div id="carouselId" class="carousel slide g-0" data-bs-ride="carousel" style="overflow: hidden" :style="{ height: Height+ 'px' }">
        <ol class="carousel-indicators d-none d-sm-flex">
            <li data-bs-target="#carouselId" :class="{'active': index == 0}" v-for="(image, index) in Images" :key="index" :data-bs-slide-to="index"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item"  :class="{'active': index == 0}" v-for="(image, index) in Images" :key="image">
                <img :style="{height: Height+'px'}" :src="image" alt="First slide">
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
  object-fit: cover !important;
  width: 100%;
}
</style>

<script>
export default {
  name: 'app-slider',
  props: {
    Height: {
      default: 850
    },
    Images: {
      required: false,
      default: [
        'https://images.unsplash.com/photo-1510076857177-7470076d4098?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
        'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
        'https://cdn.venuescanner.com/photos/mSBsl/med_dafc632d83faa8d9b4a7c4fda67a9d2c.jpg']
    }
  }
}
</script>
