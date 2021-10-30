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
          :src="Comment.Photo"
          class="img rounded-circle"
          alt=""
        />
        <star class="mt-2 d-block" :Star="Comment.Star"></star>
        <a style="text-decoration: none" class="d-inline-block" href="javascript:void(0)">{{
          Comment.Owner
        }}</a>
      </div>
      <div>
        <p style="display: inline-block; text-indent: 20px" class="mx-3">
          {{ Comment.Comment }}
        </p>
        <p class="text-muted" style="text-align: right">2 gün önce</p>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../Venue/Star.vue'
export default {
  components: { Star },
  name: 'Comment',
  props: {
    Comment
  }
}
</script>
