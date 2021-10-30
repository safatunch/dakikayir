<template>
<div class="container-fluid g-0">
<app-header></app-header>
<slot></slot>
</div>
</template>

<script>
import AppHeader from './Header.vue'

export default {
  name: 'Layout',
  components: { AppHeader }
}
</script>
