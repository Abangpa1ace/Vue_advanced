<template>
  <ul>
    <li v-for="item in list" :key="item.title" class="list-item">
      <!-- 포인트 영역 -->
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <!-- 정보 영역 -->
      <div>
        <p><a :href="item.url" target="blank">{{ item.title }}</a></p>
        <small class="info-text">{{ item.time_ago}} by 
          <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState(['news', 'jobs', 'asks']),
    list() {
      const name = this.$route.name;
      if (name === "news") {
        return this.news
      }
      else if (name === "ask") {
        return this.asks
      }
      else if (name === "jobs") {
        return this.jobs
      }
      else {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(['fetchNewsList', 'fetchJobsList', 'fetchAskList'])
  },
  created() {
    const name = this.$route.name;
    if (name === "news") {
      this.fetchNewsList();
    }
    else if (name === "ask") {
      this.fetchAskList();
    }
    else if (name === "jobs") {
      this.fetchJobsList();
    }
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
  margin: 0 10px 10px 0;
  background: #f4f4f4;
  color: #42b883;
  text-align: center;
  border-radius: 10px;
}

.list-item .link-text:hover {
  text-decoration: underline;
  cursor: pointer;
}

.list-item .info-text {
  display: block;
  width: 100%;
}

</style>