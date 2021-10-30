<template>
    <div style="display: inline">
        <span>{{Star}} </span>
        <span class="text-warning bi" :class="StarClass(i)" v-for="i of 5" :key="i"></span>
    </div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    Star: {
      type: Number,
      required: true
    }
  },
  methods: {
    StarClass (i) {
      if (i <= Math.floor(this.Star)) {
        return 'bi-star-fill'
      } else if ((Math.floor(this.Star) === (i - 1) && this.Star % 1 >= 0.5)) {
        return 'bi-star-half'
      } else {
        return 'bi-star'
      }
    }
  }
}
</script>
