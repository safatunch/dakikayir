<template>
<div v-if="Reviews.length > 0">
    <review v-for="(Review, index) in Reviews" :key="index" :Review="Review"></review>
</div>
<div class="py-2" v-else>
  <label>Bu mekan hakkında pek bir görüş yok, ama eminiz ki mükemmel görüşleri hakediyor! <i class="bi bi-stars"></i></label>
</div>
</template>

<script>
import Review from './Single.vue'
export default {
  name: 'ReviewList',
  components: {
    Review
  },
  props: {
    Reviews: {
      required: false
    }
  }
}
</script>
