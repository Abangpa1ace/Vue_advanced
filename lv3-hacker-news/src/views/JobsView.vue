<template>
  <div>
    <div
      v-for="job in this.jobs"
      :key="job.title">
      {{ job.title }}
    </div>
  </div>
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