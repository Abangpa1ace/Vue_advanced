<template>
  <div id="app">
    <Header></Header>
    <router-view class="main"></router-view>
  </div> 
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

.main {
  padding: 20px;
}

</style>