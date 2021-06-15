<template>
  <div class="header">
    <router-link to="/news">News</router-link>  | 
    <router-link to="/jobs">Jobs</router-link>  | 
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.header {
  padding: 15px;
  color: #ffffff;
  background: #42b883;
}

.header .router-link-exact-active {
  color: #35495e;
}

</style>