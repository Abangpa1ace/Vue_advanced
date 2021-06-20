<template>
  <ul>
    <li
      v-for="item in news"
      :key="item.title">
      <p><a :href="item.url" target="blank">{{ item.title }}</a></p>
      <small>{{ item.time_ago}} by 
        <router-link :to="`/user/${item.user}`" class="userlink">{{ item.user }}</router-link>
      </small>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState(['news'])
  },
  methods: {
    ...mapActions(['fetchNewsList'])
  },
  created() {
    this.fetchNewsList()
  }
}
</script>

<style scoped>

</style>