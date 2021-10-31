<template>
  <div class="row d-flex flex-row justify-content-start mt-4">
    <div class="col-lg-12 d-sm-flex d-block">
      <div class="d-sm-flex d-block flex-column text-center">
        <img
          style="
            width: 120px;
            height: 120px;
            object-fit: cover;
            border: 1px solid gray;
          "
          :src="Review.OwnerPhoto"
          class="img rounded-circle"
          alt=""
        />
        <star class="mt-2 d-block" :Star="Review.Rating"></star>
        <a style="text-decoration: none" class="d-inline-block" target="_blank" :href="Review.OwnerUrl">{{
          Review.Owner
        }}</a>
      </div>
      <div class="w-100">
        <p style="display: inline-block; text-indent: 20px" class="mx-3">
          {{ Review.Text }}
        </p>
        <p class="text-muted" style="text-align: right">{{ Review.Time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../Venue/Star.vue'
export default {
  components: { Star },
  name: 'Review',
  props: {
    Review: {
      required: true
    }
  }
}
</script>
