<template>
  <div>
    <p>name: {{ this.user.id }}</p>
    <p>created: {{ this.user.created }}</p>
    <p>karma: {{ this.user.karma }}</p>
    <p>about: {{ this.user.about }}</p>
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