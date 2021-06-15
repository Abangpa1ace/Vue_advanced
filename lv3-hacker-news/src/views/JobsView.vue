<template>
  <div>
    jobs
  </div>
</template>

<script>
import { fetchJobsList } from '../api';

export default {
  data() {
    return {
      jobsList: [],
    }
  } ,
  created() {
    fetchJobsList()
      .then(res => this.jobsList = res.data)
      .catch(err => console.log(err))
  },
}
</script>

<style scoped>

</style>