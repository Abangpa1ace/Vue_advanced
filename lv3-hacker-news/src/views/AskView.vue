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
  name: 'AskView',
  data() {
    return {
      askList: [],
    }
  } ,
  created() {
    fetchAskList()
      .then(res => this.askList = res.data)
      .catch(err => console.log(err))
  },
}
</script>

<style scoped>

</style>