<template>
    <div id="carouselId" class="carousel slide g-0" data-bs-ride="carousel" style="overflow: hidden" :style="{ height: Height+ 'px' }">
        <ol class="carousel-indicators d-none d-sm-flex">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img :style="{height: Height+'px'}" src="https://images.unsplash.com/photo-1510076857177-7470076d4098?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="First slide">
            </div>
            <div class="carousel-item">
                <img :style="{height: Height+'px'}" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img :style="{height: Height+'px'}" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Third slide">
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
      required: true
    }
  }
}
</script>
