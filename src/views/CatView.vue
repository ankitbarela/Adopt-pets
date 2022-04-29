<template>
  <div class="cat">
    <b-table striped hover :items="cats"></b-table>
  </div>
</template>

<script>
import cats from '@/data/cats.js'

export default {
  name: 'CatView',
  data () {
    return {
      cats
    }
  }
}
</script>
