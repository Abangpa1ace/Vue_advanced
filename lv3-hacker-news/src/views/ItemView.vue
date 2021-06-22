<template>
  <div>
    <p>title: {{ item.title }}</p>
    <p>user: 
      <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
    </p>
    <div v-html="item.content"></div>
    
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';

export default {
  computed: {
  ...mapState(['item'])
  },
  methods: {
    ...mapActions(['fetchItemDetail'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.fetchItemDetail(itemId);
  }
}
</script>

<style scoped>

</style>