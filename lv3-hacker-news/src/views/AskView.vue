<template>
  <div>
    <div 
      v-for="ask in askList"
      :key="ask.title">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '../api';

export default {
  data() {
    return {
      askList: [],
    }
  } ,
  created() {
    fetchAskList()
      .then(res => this.askList = res.data)
      .catch(err => console.log(err))
      .then(console.log(askList))
  },
}
</script>

<style scoped>

</style>