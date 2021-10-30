<template>
    <div class="container-fluid g-0 min-vh-100 p-0">
        <div style="background: url('https://www.sedgebrookhall.co.uk/wp-content/uploads/2018/12/SH1.jpg'); position: absolute; top: 0; bottom: 0; right: 0; left: 0">
        <div class="h-100 w-100" style="background-color: rgba(0, 0, 0, 0.5)" />
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'EmptyLayout'
}
</script>
