<template>
  <div>
    <div 
      v-for="news in this.$store.state.news"
      :key="news.title">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('fetchNewsList')
  }
}
</script>

<style scoped>

</style>