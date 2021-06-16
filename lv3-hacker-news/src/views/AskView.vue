<template>
  <div>
    <div 
      v-for="ask in this.$store.state.asks"
      :key="ask.title">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'AskView',
  data() {
    return {

    }
  } ,
  created() {
    this.$store.dispatch('fetchAskList')
  },
}
</script>

<style scoped>

</style>