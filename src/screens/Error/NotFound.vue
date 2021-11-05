<template>
<div class="d-flex p-0 justify-content-center min-vh-100">
  <!-- <div style="position: absolute;background-color: black; top: 0; bottom: 0; left:0; right:0; z-index:1;"></div> -->
  <div style="margin: auto 0; z-index:2" class="text-center text-white">
  <h1>Oh dear!</h1>
  <h3>We couldn't find this path, you seem to have been lost</h3>
  <button class="btn btn-warning mt-4" @click="$router.go(-1)">Return back</button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'NotFound'
}
</script>
