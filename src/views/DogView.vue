<template>
  <div class="cat">
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${data.value}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DogView',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
