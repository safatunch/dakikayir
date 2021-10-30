<template>
  <div class="container-fluid">
    <transition name="main-view" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view></router-view>
      </component>
    </transition>
  </div>
</template>

<style scoped>
.main-view-enter {
  opacity: 0;
}
.main-view-enter-active {
  transition: opacity 0.2s;
}
.main-view-leave-active {
  opacity: 0;
  transition: opacity 0.2s;
}
</style>

<script>

export default{
  name: 'App'
}
</script>
