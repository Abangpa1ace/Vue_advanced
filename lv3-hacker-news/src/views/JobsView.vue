<template>
  <ul>
    <li
      v-for="job in jobs"
      :key="job.title">
      <p><a :href="job.url" target="blank">{{ job.title }}</a></p>
      <small>{{ job.domain }}</small>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState(['jobs'])
  },
  methods: {
    ...mapActions(['fetchJobsList'])
  },
  created() {
    this.fetchJobsList()
  }
}
</script>

<style scoped>

</style>