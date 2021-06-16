<template>
  <div>
    view
  </div>
</template>

<script>

import { fetchNewsList } from '../api'

export default {
    name: 'NewsView',
  data() {
    return {
      newsList: [],
    }
  },
  created() {
    fetchNewsList()
      .then(res => this.newsList = res.data)
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>