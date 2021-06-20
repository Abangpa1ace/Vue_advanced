<template>
  <div>
    user
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';

export default {
  computed: {
  ...mapState(['user'])
  },
  methods: {
    ...mapActions(['fetchUserDetail'])
  },
  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    this.fetchUserDetail(userName);
  }
}
</script>

<style scoped>

</style>