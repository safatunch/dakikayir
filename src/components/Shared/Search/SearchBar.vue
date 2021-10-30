<template>
<div>
            <button type="button" @click="SearchModalStatus = true" class="border-0 mx-4 mt-2" style="background-color: transparent !important; color: white;"><h5 class="p-0 m-0"><span class="bi bi-search"></span></h5></button>
            <search-modal :Active="SearchModalStatus" @CloseModal="SearchModalStatus = false" />
</div>
</template>

<script>
import SearchModal from './SearchModal.vue'
export default {
  components: { SearchModal },
  name: 'SearchBar',
  data () {
    return {
      SearchModalStatus: false
    }
  }
}
</script>
