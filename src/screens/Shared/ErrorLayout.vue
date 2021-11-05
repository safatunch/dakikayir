<template>
    <div class="container-fluid g-0 min-vh-100 p-0">
        <div style="background: url('https://i.pinimg.com/originals/4c/67/8d/4c678d7ddddd7f7a4e60dbe1fb6ed9f6.jpg'); z-index: -1; background-size: cover; position: absolute; top: 0; bottom: 0; right: 0; left: 0">
        <div class="h-100 w-100" style="background-color: rgba(0, 0, 0, 0.5)" />
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ErrorLayout'
}
</script>
