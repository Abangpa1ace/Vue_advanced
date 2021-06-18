<template>
  <div>
    <div 
      v-for="ask in asks"
      :key="ask.title">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AskView',
  computed: {
    ...mapState(['asks'])
  },
  methods: {
    ...mapActions(['fetchAskList'])
  },
  created() {
    this.fetchAskList();
  }
}
</script>

<style scoped>

</style>