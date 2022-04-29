<template>
  <div class="cat">
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs.js'

export default {
  name: 'CatView',
  data () {
    return {
      dogs
    }
  }
}
</script>
