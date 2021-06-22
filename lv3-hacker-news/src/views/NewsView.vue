<template>
  <ul>
    <li
      v-for="item in news"
      :key="item.title"
      class="list-item">
      <div class="points">
        {{ item.points || 0 }}
      </div>
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
.list-item {
  display: flex;
  align-items: center;
  margin: 0 0 20px;
  border-bottom: 1px solid blue;
}

.list-item .points {
  width: 25px;
  padding: 10px;
  margin: 0 10px 0 0;
  background: #f4f4f4;
  color: #42b883;
  text-align: center;
  border-radius: 10px;
}
</style>